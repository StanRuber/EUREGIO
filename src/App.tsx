import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  MapPin, 
  RotateCcw,
  ArrowRight,
  Heart,
  Bookmark,
  Compass,
  ArrowLeft,
  Globe,
  ChevronDown,
  Info,
  HelpCircle,
  X,
  Share2,
  Footprints,
  Bike,
  CarFront
} from 'lucide-react';
import { MOCK_EVENTS } from './data';
import { Event, UserAnswers, Question } from './types';
import { translations, LANGUAGES, Language } from './translations';

const getDistanceIcon = (dist: string, size: number) => {
  if (dist === 'nearby') return <Footprints size={size} />;
  if (dist === 'regional') return <Bike size={size} />;
  if (dist === 'far') return <CarFront size={size} />;
  return <Compass size={size} />;
};

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('app_language');
    return (saved as Language) || 'en';
  });
  const [view, setView] = useState<'discovery' | 'liked'>('discovery');
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [isFinished, setIsFinished] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [likedEvents, setLikedEvents] = useState<string[]>(() => {
    const saved = localStorage.getItem('liked_events');
    return saved ? JSON.parse(saved) : [];
  });
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showLanding, setShowLanding] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const t = translations[language];
  const QUESTIONS = t.questions;

  useEffect(() => {
    localStorage.setItem('liked_events', JSON.stringify(likedEvents));
  }, [likedEvents]);

  useEffect(() => {
    localStorage.setItem('app_language', language);
  }, [language]);

  const handleAnswer = (key: string, value: any, nextText?: string, isAutoSkip = false) => {
    if (isProcessing) return;
    
    setIsProcessing(true);
    if (!isAutoSkip) {
      setSelectedOption(value);
      if (nextText) {
        setFeedbackText(nextText);
      }
    }
    
    setAnswers(prev => ({ ...prev, [key]: value }));
    
    const delay = isAutoSkip ? 0 : (nextText ? 1000 : 400);

    if (step < QUESTIONS.length - 1) {
      setTimeout(() => {
        setStep(prev => prev + 1);
        setFeedbackText("");
        setIsProcessing(false);
        setSelectedOption(null);
      }, delay);
    } else {
      setTimeout(() => {
        setIsFinished(true);
        setFeedbackText("");
        setIsProcessing(false);
        setSelectedOption(null);
      }, delay);
    }
  };

  const handleBack = () => {
    if (isProcessing) return;
    
    let newStep = step;
    let newAnswers = { ...answers };
    let finished = isFinished;

    if (finished) {
      finished = false;
      const lastQuestionId = QUESTIONS[QUESTIONS.length - 1].id;
      delete (newAnswers as any)[lastQuestionId];
    } else {
      if (newStep <= 0) return;
      newStep--;
      const prevQuestionId = QUESTIONS[newStep].id;
      delete (newAnswers as any)[prevQuestionId];
    }

    // Recursively go back if the question was an auto-skip (only 1 valid option)
    while (newStep > 0) {
      const q = QUESTIONS[newStep];
      const validOptions = q.options.filter(option => 
        getMatchCount({ ...newAnswers, [q.id]: option.value }) > 0
      );
      
      if (validOptions.length === 1) {
        newStep--;
        const prevId = QUESTIONS[newStep].id;
        delete (newAnswers as any)[prevId];
      } else {
        break;
      }
    }

    setStep(newStep);
    setAnswers(newAnswers);
    setIsFinished(finished);
    setFeedbackText("");
    setSelectedOption(null);
  };

  const toggleLike = (eventId: string) => {
    setLikedEvents(prev => 
      prev.includes(eventId) 
        ? prev.filter(id => id !== eventId) 
        : [...prev, eventId]
    );
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setIsFinished(false);
    setFeedbackText("");
    setView('discovery');
    setShowResetConfirm(false);
    setShowLanding(false);
  };

  const confirmReset = () => {
    if (step === 0 && !isFinished) {
      reset();
    } else {
      setShowResetConfirm(true);
    }
  };

  const getMatchCount = (tempAnswers: UserAnswers) => {
    return MOCK_EVENTS.filter(event => {
      if (tempAnswers.mood && !event.mood.includes(tempAnswers.mood)) return false;
      if (tempAnswers.energy && event.energy_level !== tempAnswers.energy) return false;
      if (tempAnswers.social && !event.social_context.includes(tempAnswers.social)) return false;
      if (tempAnswers.type && !event.event_type.includes(tempAnswers.type)) return false;
      if (tempAnswers.distance && event.travel_distance_from_maastricht !== tempAnswers.distance) return false;
      if (tempAnswers.time && !event.date_category.includes(tempAnswers.time)) return false;
      if (tempAnswers.budget && event.budget_level !== tempAnswers.budget) return false;
      if (tempAnswers.surprise && !event.surprise_level.includes(tempAnswers.surprise)) return false;
      return true;
    }).length;
  };

  const remainingCount = useMemo(() => {
    return getMatchCount(answers);
  }, [answers]);

  const recommendations = useMemo(() => {
    if (!isFinished) return [];

    // 1. Interpret user's answers as filter values & Apply filters
    let pool = MOCK_EVENTS.filter(event => {
      if (answers.mood && !event.mood.includes(answers.mood)) return false;
      if (answers.energy && event.energy_level !== answers.energy) return false;
      if (answers.social && !event.social_context.includes(answers.social)) return false;
      if (answers.type && !event.event_type.includes(answers.type)) return false;
      if (answers.distance && event.travel_distance_from_maastricht !== answers.distance) return false;
      if (answers.time && !event.date_category.includes(answers.time)) return false;
      if (answers.budget && event.budget_level !== answers.budget) return false;
      if (answers.surprise && !event.surprise_level.includes(answers.surprise)) return false;
      return true;
    });

    // 2. Relax filters if too few events remain
    if (pool.length < 1) {
      pool = MOCK_EVENTS.filter(event => {
        if (answers.mood && !event.mood.includes(answers.mood)) return false;
        if (answers.type && !event.event_type.includes(answers.type)) return false;
        // Keep mood and type as hard filters, relax others
        return true;
      });
    }

    // 3. Rank the remaining events
    const ranked = pool.map(event => {
      let score = 0;
      let reasons: string[] = [];

      if (answers.mood && event.mood.includes(answers.mood)) {
        score += 10;
        reasons.push(t.matchesMood.replace('{mood}', answers.mood));
      }
      if (answers.energy === event.energy_level) {
        score += 5;
        reasons.push(t.energyVibe.replace('{energy}', event.energy_level));
      }
      if (answers.social && event.social_context.includes(answers.social)) {
        score += 8;
        reasons.push(t.perfectFor.replace('{social}', answers.social));
      }
      if (answers.surprise && event.surprise_level.includes(answers.surprise)) {
        score += 4;
        reasons.push(t.matchesPreference.replace('{surprise}', answers.surprise));
      }
      if (answers.time && event.date_category.includes(answers.time)) {
        score += 2;
        reasons.push(t.happening.replace('{time}', answers.time));
      }

      return { 
        ...event, 
        score, 
        matchReason: reasons.length > 0 ? reasons.slice(0, 2).join(' • ') : t.greatMatch
      };
    });

    // 4. Show up to 12 best matches
    return ranked.sort((a, b) => b.score - a.score).slice(0, 12);
  }, [isFinished, answers]);

  const likedList = useMemo(() => {
    return MOCK_EVENTS.filter(e => likedEvents.includes(e.id));
  }, [likedEvents]);

  const currentQuestion = QUESTIONS[step];

  // Auto-skip logic: if only 1 valid answer is available, skip the question
  useEffect(() => {
    if (isFinished || view !== 'discovery' || isProcessing || !currentQuestion) return;

    const validOptions = currentQuestion.options.filter(option => 
      getMatchCount({ ...answers, [currentQuestion.id]: option.value }) > 0
    );

    if (validOptions.length === 1) {
      handleAnswer(currentQuestion.id, validOptions[0].value, undefined, true);
    }
  }, [step, answers, isFinished, view, isProcessing, currentQuestion]);

  const bgColors = [
    'bg-[#FF6321]', // Orange
    'bg-[#00FF00]', // Neon Green
    'bg-[#0000FF]', // Blue
    'bg-[#FFFF00]', // Yellow
    'bg-[#FF00FF]', // Magenta
    'bg-[#00FFFF]', // Cyan
    'bg-[#FF3366]', // Pink
    'bg-[#9933FF]', // Purple
  ];

  const currentBg = showLanding ? 'bg-[#FF6321]' : (isFinished ? 'bg-[#FF6321]' : bgColors[step % bgColors.length]);

  const mainMaxWidth = (isFinished || view === 'liked') ? 'max-w-7xl' : 'max-w-md';

  return (
    <div className={`h-screen ${currentBg} text-black font-sans selection:bg-black selection:text-white overflow-hidden transition-colors duration-700 flex flex-col`}>
      {/* Top Controls */}
      <div className="fixed top-4 left-4 z-[100]">
        <button 
          onClick={() => setShowInfo(true)}
          className="p-1.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
          aria-label="App info"
        >
          <HelpCircle size={12} />
        </button>
      </div>

      <div className="fixed top-4 right-4 z-[100]">
        <div className="relative">
          <button 
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            className={`flex items-center gap-1.5 border-2 border-black px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all bg-white text-black`}
          >
            <Globe size={14} />
            <span className="text-[10px] font-black uppercase tracking-tighter">
              {LANGUAGES.find(l => l.code === language)?.flag} {language}
            </span>
            <ChevronDown size={12} className={`transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isLangMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="absolute top-full right-0 mt-1 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-32 overflow-hidden"
              >
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLangMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-black hover:text-white transition-colors border-b border-black last:border-b-0 ${language === lang.code ? 'bg-black/5 font-black' : 'font-bold'}`}
                  >
                    <span className="text-base">{lang.flag}</span>
                    <span className="text-[10px] uppercase tracking-tighter">{lang.label}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Sidebar Progress Bar */}
      {!showLanding && !isFinished && view === 'discovery' && (
        <div className="fixed left-4 top-1/2 -translate-y-1/2 h-1/2 w-1 flex flex-col gap-1 z-50">
          {QUESTIONS.map((_, i) => (
            <div 
              key={i} 
              className={`flex-grow rounded-full transition-all duration-500 border border-black/10 ${i <= step ? 'bg-black' : 'bg-white/30'}`}
            />
          ))}
        </div>
      )}

      <main className={`${mainMaxWidth} mx-auto px-8 pt-4 pb-24 flex flex-col h-full w-full relative overflow-hidden transition-all duration-500`}>
        
        <div className="flex-grow flex flex-col relative overflow-hidden">
          <AnimatePresence mode="wait">
            {showLanding ? (
              <motion.div
                key="landing"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center text-center space-y-8 py-12"
              >
                <div className="bg-white text-black p-6 -rotate-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] border-4 border-black inline-block">
                  <h1 className="text-5xl font-display font-black tracking-tighter leading-none">{t.title}</h1>
                  <p className="text-xs uppercase tracking-[0.3em] font-black opacity-80 mt-1">{t.subtitle}</p>
                </div>

                <div className="space-y-4 max-w-xs">
                  <h2 className="text-black text-2xl font-display font-bold uppercase leading-tight tracking-tight">
                    {t.landingTitle}
                  </h2>
                  <p className="text-black/80 text-sm font-medium leading-relaxed">
                    {t.landingDesc}
                  </p>
                </div>

                <button 
                  onClick={() => setShowLanding(false)}
                  className="group relative inline-flex items-center gap-3 bg-white text-black px-8 py-4 border-4 border-black font-black text-xl uppercase tracking-tighter shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                >
                  {t.startJourney}
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ) : view === 'discovery' ? (
              !isFinished ? (
                <motion.div
                  key={currentQuestion.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className="space-y-6 relative flex flex-col h-full justify-start pt-12"
                >
                  {/* Question Header */}
                  <div className="flex items-center gap-4 shrink-0">
                    {step > 0 && (
                      <button 
                        onClick={handleBack}
                        className="p-2 bg-white border-2 border-black rounded-full hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none"
                        aria-label="Go back"
                      >
                        <ArrowLeft size={18} />
                      </button>
                    )}
                    <div className="text-[10px] font-display font-bold bg-black text-white px-2 py-0.5 -rotate-1">
                      {t.question.toUpperCase()} {step + 1} / {QUESTIONS.length}
                    </div>
                    <div className="text-[10px] font-display font-bold bg-white border border-black px-2 py-0.5 rotate-1">
                      {remainingCount} {t.matchesLeft.toUpperCase()}
                    </div>
                  </div>

                  <div className="space-y-2 shrink-0">
                    <h2 className="text-4xl font-display font-bold leading-[0.9] tracking-tighter uppercase">
                      {currentQuestion.text}
                    </h2>
                  </div>

                  <div className="relative flex-grow overflow-hidden flex flex-col">
                    <div 
                      className="grid gap-2 overflow-y-auto -mr-6 pr-6 max-h-[85vh] py-2 scrollbar-custom"
                    >
                      {currentQuestion.options
                        .filter(option => getMatchCount({ ...answers, [currentQuestion.id]: option.value }) > 0)
                        .map((option) => {
                          const isDisabled = isProcessing;
                          
                          return (
                            <button
                              key={option.label}
                              disabled={isDisabled}
                              onClick={() => handleAnswer(currentQuestion.id, option.value, option.nextText)}
                              className={`group flex items-center justify-between p-4 rounded-none border-4 transition-all text-left ${
                                selectedOption === option.value 
                                  ? 'bg-black text-white border-black translate-x-1 translate-y-1 shadow-none' 
                                  : 'bg-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none'
                              } ${isProcessing && selectedOption !== option.value ? 'opacity-50' : ''}`}
                            >
                              <div className="flex flex-col">
                                <span className="text-lg font-bold uppercase tracking-tight leading-tight">{option.label}</span>
                              </div>
                              <ArrowRight size={20} className={`transition-transform shrink-0 ${selectedOption === option.value ? 'translate-x-2' : 'group-hover:translate-x-2'}`} />
                            </button>
                          );
                        })}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-4 flex flex-col h-full pt-14"
                >
                  <div className="space-y-0.5 shrink-0">
                    <h2 className="text-4xl font-display font-bold uppercase leading-[0.85] tracking-tighter">{t.foundForYou}</h2>
                    <p className="font-bold text-[10px] opacity-70">{t.basedOnMood}</p>
                  </div>

                  <div className="flex-grow overflow-y-auto -mr-6 pr-6 py-2 scrollbar-custom">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-8">
                      {recommendations.length > 0 ? (
                        recommendations.map((event, idx) => (
                          <EventCard 
                            key={event.id} 
                            event={event} 
                            idx={idx} 
                            isLiked={likedEvents.includes(event.id)}
                            onLike={() => toggleLike(event.id)}
                            onShowDetails={() => setSelectedEvent(event)}
                            matchReason={(event as any).matchReason}
                            language={language}
                          />
                        ))
                      ) : (
                        <div className="col-span-full py-12 text-center space-y-4 bg-white/20 border-4 border-black border-dashed p-8">
                          <p className="text-2xl font-display font-black uppercase leading-none">{t.noResults}</p>
                          <p className="font-bold text-sm">{t.tryAgain}</p>
                        </div>
                      )}
                    </div>

                    {/* Wildcard / Surprise */}
                    {answers.surprise !== 'safe' && (
                      <div className="p-6 bg-[#00FF00] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-3 -rotate-1 mb-8">
                        <div className="flex items-center gap-2">
                          <Sparkles size={20} />
                          <span className="text-[10px] uppercase tracking-widest font-black">{t.wildcard}</span>
                        </div>
                        <h3 className="text-xl font-display font-bold uppercase leading-none">"{t.feelingAdventurous}"</h3>
                        <p className="font-bold text-xs">{t.wildcardDesc}</p>
                        <button className="text-sm font-black border-b-2 border-black pb-0.5 hover:bg-black hover:text-white transition-colors">{t.tellMeMore}</button>
                      </div>
                    )}

                    <button 
                      onClick={confirmReset}
                      className="w-full py-4 bg-black text-white font-black text-xl uppercase tracking-tighter flex items-center justify-center gap-3 hover:bg-white hover:text-black border-4 border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]"
                    >
                      <RotateCcw size={20} /> {t.startOver}
                    </button>
                  </div>
                </motion.div>
              )
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4 flex flex-col h-full pt-14"
              >
                <div className="space-y-0.5 shrink-0">
                  <h2 className="text-5xl font-display font-bold uppercase leading-[0.85] tracking-tighter">{t.favorites}</h2>
                  <p className="font-bold text-[10px] opacity-70">{t.likedEvents}</p>
                </div>

                <div className="flex-grow overflow-y-auto -mr-6 pr-6 py-2 scrollbar-custom">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {likedList.length > 0 ? (
                      likedList.map((event, idx) => (
                        <EventCard 
                          key={event.id} 
                          event={event} 
                          idx={idx} 
                          isLiked={true}
                          onLike={() => toggleLike(event.id)}
                          onShowDetails={() => setSelectedEvent(event)}
                          language={language}
                        />
                      ))
                    ) : (
                      <div className="col-span-full py-12 text-center space-y-4">
                        <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center mx-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-12">
                          <Bookmark size={24} />
                        </div>
                        <p className="text-lg font-bold uppercase italic">{t.noFavorites}</p>
                        <button 
                          onClick={() => setView('discovery')}
                          className="text-sm font-black uppercase text-black border-b-2 border-black"
                        >
                          {t.startDiscovery}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Navbar */}
        {!showLanding && (
          <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex gap-1 p-1 z-[60]">
            <button 
              onClick={() => setView('discovery')}
              className={`flex items-center gap-2 px-4 py-2 font-black uppercase tracking-tighter transition-all ${view === 'discovery' ? 'bg-black text-white' : 'hover:bg-black/5'}`}
            >
              <Compass size={20} />
              <span className="text-xs">{t.discover}</span>
            </button>
            <div className="w-1 bg-black" />
            <button 
              onClick={() => setView('liked')}
              className={`flex items-center gap-2 px-4 py-2 font-black uppercase tracking-tighter transition-all ${view === 'liked' ? 'bg-black text-white' : 'hover:bg-black/5'}`}
            >
              <Heart size={20} fill={view === 'liked' ? "currentColor" : "none"} />
              <span className="text-xs">{t.liked}</span>
            </button>
          </nav>
        )}

      </main>

      {/* Modals (Heuristics #5, #10) */}
      <AnimatePresence>
        {selectedEvent && (
          <DetailsModal 
            event={selectedEvent} 
            onClose={() => setSelectedEvent(null)} 
            language={language}
            isLiked={likedEvents.includes(selectedEvent.id)}
            onLike={() => toggleLike(selectedEvent.id)}
          />
        )}
        {feedbackText && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/40 backdrop-blur-sm px-6">
            <motion.div 
              initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
              animate={{ scale: 1, rotate: 3, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              className="bg-white border-8 border-black p-10 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
            >
              <p className="text-4xl font-display font-black text-black text-center leading-none uppercase tracking-tighter">
                {feedbackText}
              </p>
            </motion.div>
          </div>
        )}

        {showResetConfirm && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-md px-6">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white border-8 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] max-w-sm w-full space-y-6"
            >
              <h3 className="text-3xl font-display font-black uppercase leading-none tracking-tighter">
                {t.confirmReset}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={reset}
                  className="py-4 bg-black text-white font-black uppercase tracking-tighter hover:bg-white hover:text-black border-4 border-black transition-all"
                >
                  {t.yes}
                </button>
                <button 
                  onClick={() => setShowResetConfirm(false)}
                  className="py-4 bg-white text-black font-black uppercase tracking-tighter hover:bg-black hover:text-white border-4 border-black transition-all"
                >
                  {t.no}
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {showInfo && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-md px-6">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white border-8 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] max-w-sm w-full space-y-4 relative"
            >
              <button 
                onClick={() => setShowInfo(false)}
                className="absolute -top-4 -right-4 bg-black text-white p-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:scale-110 transition-transform"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-3">
                <Info size={32} />
                <h3 className="text-4xl font-display font-black uppercase leading-none tracking-tighter">
                  {t.infoTitle}
                </h3>
              </div>
              <p className="font-bold text-sm leading-relaxed">
                {t.infoDesc}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface EventCardProps {
  event: Event;
  idx: number;
  isLiked: boolean;
  onLike: () => void;
  onShowDetails: () => void;
  matchReason?: string;
  language: Language;
}

const EventCard: React.FC<EventCardProps> = ({ event, idx, isLiked, onLike, onShowDetails, matchReason, language }) => {
  const t = translations[language];

  const handleShare = async () => {
    const shareData = {
      title: event.name,
      text: `${event.name} in ${event.city}: ${event.description}`,
      url: event.url || window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${shareData.title}\n${shareData.url}`);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  const getDistanceLabel = (dist: string) => {
    return (t as any).distanceMethods?.[dist] || dist;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      onClick={onShowDetails}
      className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden group shrink-0 cursor-pointer hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
    >
      <div className="relative h-24 border-b-2 border-black">
        <img 
          src={event.image_url} 
          alt={event.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-2 space-y-1.5">
        <div>
          <h3 className="text-base font-display font-bold uppercase leading-none mb-0.5 line-clamp-1">{event.name}</h3>
          <div className="flex items-center gap-2 text-[8px] font-bold uppercase opacity-70">
            <div className="flex items-center gap-0.5">
              <MapPin size={8} />
              <span>{event.city}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-0.5">
              {getDistanceIcon(event.travel_distance_from_maastricht, 8)}
              <span>{getDistanceLabel(event.travel_distance_from_maastricht)}</span>
            </div>
          </div>
        </div>
        <p className="text-[10px] leading-tight font-medium line-clamp-2 opacity-80">
          {event.description}
        </p>
        <div className="pt-1.5 border-t border-black flex justify-between items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleShare();
              }}
              className="p-1 hover:bg-black hover:text-white transition-all border border-transparent hover:border-black"
              title={t.share}
            >
              <Share2 size={10} />
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onLike();
              }}
              className={`p-1 transition-all border border-transparent hover:border-black ${isLiked ? 'text-[#EA4335]' : 'hover:bg-black hover:text-white'}`}
              title={isLiked ? "Unlike" : "Like"}
            >
              <Heart size={10} fill={isLiked ? "currentColor" : "none"} />
            </button>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${event.name} ${event.city}`)}`}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              rel="noopener noreferrer"
              className="p-1 hover:bg-black hover:text-white transition-all border border-transparent hover:border-black"
              title={t.showOnMap}
            >
              <MapPin size={10} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface DetailsModalProps {
  event: Event;
  onClose: () => void;
  language: Language;
  isLiked: boolean;
  onLike: () => void;
}

const DetailsModal: React.FC<DetailsModalProps> = ({ event, onClose, language, isLiked, onLike }) => {
  const t = translations[language];

  const getDistanceLabel = (dist: string) => {
    return (t as any).distanceMethods?.[dist] || dist;
  };

  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white border-8 border-black w-full max-w-2xl shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative flex flex-col max-h-[90vh]"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black text-white hover:bg-white hover:text-black border-4 border-black transition-all"
        >
          <X size={24} />
        </button>

        <div className="overflow-y-auto scrollbar-custom">
          <div className="relative h-64 sm:h-80 border-b-8 border-black">
            <img 
              src={event.image_url} 
              alt={event.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 flex gap-2">
              <button 
                onClick={onLike}
                className={`p-2 border-4 border-black transition-all ${isLiked ? 'bg-[#EA4335] text-white' : 'bg-white text-black hover:scale-110'}`}
              >
                <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl sm:text-5xl font-display font-black uppercase leading-[0.85] tracking-tighter">
                {event.name}
              </h2>
              <div className="flex flex-wrap gap-4 text-xs font-black uppercase tracking-widest opacity-60">
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  <span>{t.location}: {event.city}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {getDistanceIcon(event.travel_distance_from_maastricht, 14)}
                  <span>{t.distance}: {getDistanceLabel(event.travel_distance_from_maastricht)}</span>
                </div>
              </div>
            </div>

            <p className="text-lg font-medium leading-relaxed border-l-4 border-black pl-4 italic">
              {event.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.genre}</span>
                  <div className="flex flex-wrap gap-2">
                    {event.mood.map(m => (
                      <span key={m} className="bg-black text-white px-2 py-0.5 text-[10px] font-bold uppercase">{m}</span>
                    ))}
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.eventType}</span>
                  <div className="flex flex-wrap gap-2">
                    {event.event_type.map(type => (
                      <span key={type} className="border-2 border-black px-2 py-0.5 text-[10px] font-bold uppercase">{type}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.when}</span>
                  <div className="flex flex-wrap gap-2">
                    {event.date_category.map(date => (
                      <span key={date} className="bg-[#00FF00] border-2 border-black px-2 py-0.5 text-[10px] font-bold uppercase">{date}</span>
                    ))}
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{t.socialVibe}</span>
                  <div className="flex flex-wrap gap-2">
                    {event.social_context.map(social => (
                      <span key={social} className="bg-[#FF6321] border-2 border-black px-2 py-0.5 text-[10px] font-bold uppercase text-white">{social}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-black text-white font-black text-xl uppercase tracking-tighter flex items-center justify-center gap-3 hover:bg-white hover:text-black border-4 border-black transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]"
              >
                {t.visitWebsite} <ArrowRight size={24} />
              </a>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${event.name} ${event.city}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#00FF00] text-black font-black text-xl uppercase tracking-tighter flex items-center justify-center gap-3 hover:bg-white border-4 border-black transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]"
              >
                {t.showOnMap} <MapPin size={24} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
