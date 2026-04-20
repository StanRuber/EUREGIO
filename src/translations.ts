export type Language = 'en' | 'nl' | 'de' | 'fr' | 'es' | 'it';

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'nl', label: 'Dutch', flag: '🇳🇱' },
  { code: 'de', label: 'German', flag: '🇩🇪' },
  { code: 'fr', label: 'French', flag: '🇫🇷' },
  { code: 'es', label: 'Spanish', flag: '🇪🇸' },
  { code: 'it', label: 'Italian', flag: '🇮🇹' },
];

export const translations = {
  en: {
    title: 'EUREGIO',
    subtitle: 'Cultural Discovery',
    discover: 'Discover',
    liked: 'Liked',
    question: 'Question',
    matchesLeft: 'Matches Left',
    results: 'Results',
    foundForYou: 'Found for you.',
    basedOnMood: 'Based on your mood.',
    wildcard: 'Wildcard',
    feelingAdventurous: 'Feeling adventurous?',
    wildcardDesc: 'Secret pop-up in Liège tonight. Trek required, vibe unmatched.',
    tellMeMore: 'Tell me more',
    startOver: 'Start Over',
    startJourney: 'Start Your Journey',
    landingTitle: 'Discover Your Euregio',
    landingDesc: 'Find the perfect cultural events in the Euregio region. Answer a few quick questions and we\'ll match your mood, energy, and preferences to unique local experiences.',
    confirmReset: 'Are you sure you want to start over?',
    yes: 'Yes',
    no: 'No',
    infoTitle: 'How it works',
    infoDesc: 'Answer 8 quick questions to find the perfect cultural events in the Euregio region. We match your mood, energy, and preferences.',
    noResults: 'No exact matches found.',
    tryAgain: 'Try adjusting your preferences.',
    favorites: 'Favorites.',
    likedEvents: "Events you've liked.",
    noFavorites: 'No favorites yet.',
    startDiscovery: 'Start Discovery',
    free: 'FREE',
    details: 'Details',
    share: 'Share',
    visitWebsite: 'Visit Website',
    genre: 'Genre / Mood',
    eventType: 'Event Type',
    when: 'When',
    socialVibe: 'Social Vibe',
    location: 'Location',
    distance: 'Distance',
    showOnMap: 'Show on Map',
    distanceMethods: {
      nearby: 'Walking distance',
      regional: 'Bike distance',
      far: 'Car distance'
    },
    matchesMood: 'Matches your {mood} mood',
    energyVibe: '{energy} energy vibe',
    perfectFor: 'Perfect for {social} outings',
    matchesPreference: 'Matches your preference for {surprise} picks',
    happening: 'Happening {time}',
    greatMatch: 'A great match for your profile',
    questions: [
      {
        id: 'mood',
        text: "What are you in the mood for?",
        options: [
          { label: "Relax & Unwind", value: "relax", nextText: "Chilling out is a great choice." },
          { label: "Explore & Discover", value: "explore", nextText: "Adventure awaits!" },
          { label: "Meet People", value: "meet people", nextText: "Social vibes incoming." },
          { label: "Wildcard Choice", value: "surprise me", nextText: "Expect the unexpected." }
        ]
      },
      {
        id: 'energy',
        text: "Do you want something lowkey or more intense?",
        options: [
          { label: "Low - Keep it chill", value: "low", nextText: "Low energy, high comfort." },
          { label: "Medium - Balanced vibes", value: "medium", nextText: "Perfectly balanced." },
          { label: "High - Full intensity", value: "high", nextText: "Energy levels peaking!" }
        ]
      },
      {
        id: 'social',
        text: "Going solo or with others?",
        options: [
          { label: "Just me", value: "solo", nextText: "Solo adventures are the best." },
          { label: "With friends", value: "friends", nextText: "Good times with good people." },
          { label: "On a date", value: "date", nextText: "Romance is in the air." },
          { label: "With a group", value: "group", nextText: "The more the merrier!" }
        ]
      },
      {
        id: 'type',
        text: "More into music, art, or something different?",
        options: [
          { label: "Music", value: "music", nextText: "Let the rhythm guide you." },
          { label: "Visual Arts", value: "art", nextText: "A feast for the eyes." },
          { label: "Performance", value: "performance", nextText: "The stage is set." },
          { label: "Cinema", value: "cinema", nextText: "Lights, camera, action!" },
          { label: "Community", value: "community", nextText: "Connecting with others." },
          { label: "Outdoor", value: "outdoor", nextText: "Fresh air, fresh vibes." }
        ]
      },
      {
        id: 'distance',
        text: "How far are you willing to travel?",
        options: [
          { label: "Walking distance", value: "nearby", nextText: "Staying local today." },
          { label: "Bike distance", value: "regional", nextText: "A nice little ride." },
          { label: "Car distance", value: "far", nextText: "Going the distance!" }
        ]
      },
      {
        id: 'time',
        text: "When do you want to go?",
        options: [
          { label: "Today", value: "today", nextText: "No time like the present." },
          { label: "This weekend", value: "weekend", nextText: "Something to look forward to." },
          { label: "Flexible", value: "flexible", nextText: "Whenever the mood strikes." }
        ]
      },
      {
        id: 'budget',
        text: "Should it be free or are you okay spending a bit?",
        options: [
          { label: "Free is best (€0)", value: "free", nextText: "The best things are free." },
          { label: "Low (€0-15)", value: "low", nextText: "Budget friendly choice." },
          { label: "Medium (€15-30)", value: "medium", nextText: "A solid investment." },
          { label: "High (€30+)", value: "high", nextText: "Treat yourself!" }
        ]
      },
      {
        id: 'surprise',
        text: "Do you want a safe pick or something unexpected?",
        options: [
          { label: "Safe choice", value: "safe", nextText: "Reliable and fun." },
          { label: "Something new", value: "new", nextText: "Fresh experiences ahead." },
          { label: "Surprise me", value: "surprise", nextText: "Let's see what happens!" }
        ]
      }
    ]
  },
  nl: {
    title: 'EUREGIO',
    subtitle: 'Culturele Ontdekking',
    discover: 'Ontdek',
    liked: 'Favorieten',
    question: 'Vraag',
    matchesLeft: 'Matches Over',
    results: 'Resultaten',
    foundForYou: 'Voor jou gevonden.',
    basedOnMood: 'Gebaseerd op je stemming.',
    wildcard: 'Wildcard',
    feelingAdventurous: 'Zin in avontuur?',
    wildcardDesc: 'Geheime pop-up in Luik vanavond. Tocht vereist, sfeer ongeëvenaard.',
    tellMeMore: 'Vertel me meer',
    startOver: 'Opnieuw Beginnen',
    startJourney: 'Begin Je Reis',
    landingTitle: 'Ontdek Jouw Euregio',
    landingDesc: 'Vind de perfecte culturele evenementen in de Euregio. Beantwoord een paar korte vragen en we matchen je stemming, energie en voorkeuren met unieke lokale ervaringen.',
    confirmReset: 'Weet je zeker dat je opnieuw wilt beginnen?',
    yes: 'Ja',
    no: 'Nee',
    infoTitle: 'Hoe het werkt',
    infoDesc: 'Beantwoord 8 korte vragen om de perfecte culturele evenementen in de Euregio te vinden. We matchen je stemming, energie en voorkeuren.',
    noResults: 'Geen exacte matches gevonden.',
    tryAgain: 'Probeer je voorkeuren aan te passen.',
    favorites: 'Favorieten.',
    likedEvents: 'Evenementen die je leuk vond.',
    noFavorites: 'Nog geen favorieten.',
    startDiscovery: 'Start Ontdekking',
    free: 'GRATIS',
    details: 'Details',
    share: 'Delen',
    visitWebsite: 'Bezoek Website',
    genre: 'Genre / Stemming',
    eventType: 'Type Evenement',
    when: 'Wanneer',
    socialVibe: 'Sociale Sfeer',
    location: 'Locatie',
    distance: 'Afstand',
    showOnMap: 'Op Kaart Tonen',
    distanceMethods: {
      nearby: 'Wandelafstand',
      regional: 'Fietsafstand',
      far: 'Autoafstand'
    },
    matchesMood: 'Past bij je {mood} stemming',
    energyVibe: '{energy} energie vibe',
    perfectFor: 'Perfect voor {social} uitjes',
    matchesPreference: 'Past bij je voorkeur voor {surprise} keuzes',
    happening: 'Vindt plaats {time}',
    greatMatch: 'Een geweldige match voor jouw profiel',
    questions: [
      {
        id: 'mood',
        text: "Waar heb je zin in?",
        options: [
          { label: "Ontspannen & Tot rust komen", value: "relax", nextText: "Chillen is een geweldige keuze." },
          { label: "Verkennen & Ontdekken", value: "explore", nextText: "Het avontuur wacht!" },
          { label: "Mensen ontmoeten", value: "meet people", nextText: "Sociale vibes in aantocht." },
          { label: "Wildcard Keuze", value: "surprise me", nextText: "Verwacht het onverwachte." }
        ]
      },
      {
        id: 'energy',
        text: "Wil je iets rustigs of iets intensers?",
        options: [
          { label: "Laag - Houd het rustig", value: "low", nextText: "Lage energie, hoog comfort." },
          { label: "Gemiddeld - Gebalanceerd", value: "medium", nextText: "Perfect in balans." },
          { label: "Hoog - Volle intensiteit", value: "high", nextText: "Energieniveaus op hun piek!" }
        ]
      },
      {
        id: 'social',
        text: "Ga je alleen of met anderen?",
        options: [
          { label: "Alleen ik", value: "solo", nextText: "Solo-avonturen zijn het best." },
          { label: "Met vrienden", value: "friends", nextText: "Goede tijden met goede mensen." },
          { label: "Op een date", value: "date", nextText: "Romantiek hangt in de lucht." },
          { label: "Met een groep", value: "group", nextText: "Hoe meer zielen, hoe meer vreugd!" }
        ]
      },
      {
        id: 'type',
        text: "Meer in voor muziek, kunst, of iets anders?",
        options: [
          { label: "Muziek", value: "music", nextText: "Laat het ritme je leiden." },
          { label: "Beeldende Kunst", value: "art", nextText: "Een lust voor het oog." },
          { label: "Performance", value: "performance", nextText: "Het podium is gereed." },
          { label: "Bioscoop", value: "cinema", nextText: "Licht, camera, actie!" },
          { label: "Gemeenschap", value: "community", nextText: "Verbinding maken met anderen." },
          { label: "Buiten", value: "outdoor", nextText: "Frisse lucht, frisse vibes." }
        ]
      },
      {
        id: 'distance',
        text: "Hoe ver wil je reizen?",
        options: [
          { label: "Wandelafstand", value: "nearby", nextText: "Vandaag blijven we lokaal." },
          { label: "Fietsafstand", value: "regional", nextText: "Een lekker ritje." },
          { label: "Autoafstand", value: "far", nextText: "We gaan ver!" }
        ]
      },
      {
        id: 'time',
        text: "Wanneer wil je gaan?",
        options: [
          { label: "Vandaag", value: "today", nextText: "Geen tijd zoals nu." },
          { label: "Dit weekend", value: "weekend", nextText: "Iets om naar uit te kijken." },
          { label: "Flexibel", value: "flexible", nextText: "Wanneer de stemming toeslaat." }
        ]
      },
      {
        id: 'budget',
        text: "Moet het gratis zijn of mag het wat kosten?",
        options: [
          { label: "Gratis is het best (€0)", value: "free", nextText: "De beste dingen zijn gratis." },
          { label: "Laag (€0-15)", value: "low", nextText: "Budgetvriendelijke keuze." },
          { label: "Gemiddeld (€15-30)", value: "medium", nextText: "Een goede investering." },
          { label: "Hoog (€30+)", value: "high", nextText: "Verwen jezelf!" }
        ]
      },
      {
        id: 'surprise',
        text: "Wil je een veilige keuze of iets onverwachts?",
        options: [
          { label: "Veilige keuze", value: "safe", nextText: "Betrouwbaar en leuk." },
          { label: "Iets nieuws", value: "new", nextText: "Nieuwe ervaringen in het verschiet." },
          { label: "Verras me", value: "surprise", nextText: "Laten we zien wat er gebeurt!" }
        ]
      }
    ]
  },
  de: {
    title: 'EUREGIO',
    subtitle: 'Kulturelle Entdeckung',
    discover: 'Entdecken',
    liked: 'Favoriten',
    question: 'Frage',
    matchesLeft: 'Matches Übrig',
    results: 'Ergebnisse',
    foundForYou: 'Für dich gefunden.',
    basedOnMood: 'Basierend auf deiner Stimmung.',
    wildcard: 'Wildcard',
    feelingAdventurous: 'Abenteuerlustig?',
    wildcardDesc: 'Geheimer Pop-up in Lüttich heute Abend. Wanderung erforderlich, Stimmung unübertroffen.',
    tellMeMore: 'Erzähl mir mehr',
    startOver: 'Neustart',
    startJourney: 'Beginne deine Reise',
    landingTitle: 'Entdecke deine Euregio',
    landingDesc: 'Finde die perfekten Kulturevents in der Euregio. Beantworte ein paar kurze Fragen und wir passen deine Stimmung, Energie und Vorlieben an einzigartige lokale Erlebnisse an.',
    confirmReset: 'Bist du sicher, dass du neu starten möchtest?',
    yes: 'Ja',
    no: 'Nein',
    infoTitle: 'Wie es funktioniert',
    infoDesc: 'Beantworte 8 kurze Fragen, um die perfekten Kulturevents in der Euregio zu finden. Wir passen uns deiner Stimmung, Energie und Vorlieben an.',
    noResults: 'Keine exakten Treffer gefunden.',
    tryAgain: 'Versuche, deine Vorlieben anzupassen.',
    favorites: 'Favoriten.',
    likedEvents: 'Events, die dir gefallen haben.',
    noFavorites: 'Noch keine Favoriten.',
    startDiscovery: 'Entdeckung starten',
    free: 'GRATIS',
    details: 'Details',
    share: 'Teilen',
    visitWebsite: 'Website besuchen',
    genre: 'Genre / Stimmung',
    eventType: 'Event-Typ',
    when: 'Wann',
    socialVibe: 'Soziale Atmosphäre',
    location: 'Ort',
    distance: 'Entfernung',
    showOnMap: 'Auf Karte zeigen',
    distanceMethods: {
      nearby: 'Fußläufig',
      regional: 'Fahrradentfernung',
      far: 'Autoentfernung'
    },
    matchesMood: 'Passt zu deiner {mood} Stimmung',
    energyVibe: '{energy} Energie-Vibe',
    perfectFor: 'Perfekt für {social} Ausflüge',
    matchesPreference: 'Passt zu deiner Vorliebe für {surprise} Auswahl',
    happening: 'Findet statt {time}',
    greatMatch: 'Ein tolles Match für dein Profil',
    questions: [
      {
        id: 'mood',
        text: "Wonach steht dir der Sinn?",
        options: [
          { label: "Entspannen & Abschalten", value: "relax", nextText: "Chillen ist eine gute Wahl." },
          { label: "Erkunden & Entdecken", value: "explore", nextText: "Das Abenteuer wartet!" },
          { label: "Leute treffen", value: "meet people", nextText: "Soziale Vibes im Anmarsch." },
          { label: "Wildcard-Wahl", value: "surprise me", nextText: "Erwarte das Unerwartete." }
        ]
      },
      {
        id: 'energy',
        text: "Möchtest du etwas Ruhiges oder Intensiveres?",
        options: [
          { label: "Niedrig - Chillig halten", value: "low", nextText: "Wenig Energie, viel Komfort." },
          { label: "Mittel - Ausgeglichen", value: "medium", nextText: "Perfekt ausbalanciert." },
          { label: "Hoch - Volle Intensität", value: "high", nextText: "Energielevel am Limit!" }
        ]
      },
      {
        id: 'social',
        text: "Gehst du alleine oder mit anderen?",
        options: [
          { label: "Nur ich", value: "solo", nextText: "Solo-Abenteuer sind die besten." },
          { label: "Mit Freunden", value: "friends", nextText: "Gute Zeiten mit guten Leuten." },
          { label: "Auf ein Date", value: "date", nextText: "Romantik liegt in der Luft." },
          { label: "Mit einer Gruppe", value: "group", nextText: "Je mehr, desto besser!" }
        ]
      },
      {
        id: 'type',
        text: "Eher Musik, Kunst oder etwas anderes?",
        options: [
          { label: "Musik", value: "music", nextText: "Lass dich vom Rhythmus leiten." },
          { label: "Bildende Kunst", value: "art", nextText: "Ein Fest für die Augen." },
          { label: "Performance", value: "performance", nextText: "Die Bühne ist bereit." },
          { label: "Kino", value: "cinema", nextText: "Licht, Kamera, Action!" },
          { label: "Gemeinschaft", value: "community", nextText: "Mit anderen in Kontakt treten." },
          { label: "Outdoor", value: "outdoor", nextText: "Frische Luft, frische Vibes." }
        ]
      },
      {
        id: 'distance',
        text: "Wie weit möchtest du reisen?",
        options: [
          { label: "Fußläufig", value: "nearby", nextText: "Heute bleiben wir lokal." },
          { label: "Fahrradentfernung", value: "regional", nextText: "Eine schöne kleine Fahrt." },
          { label: "Autoentfernung", value: "far", nextText: "Wir gehen auf Distanz!" }
        ]
      },
      {
        id: 'time',
        text: "Wann möchtest du gehen?",
        options: [
          { label: "Heute", value: "today", nextText: "Keine Zeit wie die Gegenwart." },
          { label: "Dieses Wochenende", value: "weekend", nextText: "Etwas, worauf man sich freuen kann." },
          { label: "Flexibel", value: "flexible", nextText: "Wann immer die Stimmung passt." }
        ]
      },
      {
        id: 'budget',
        text: "Soll es kostenlos sein oder darf es etwas kosten?",
        options: [
          { label: "Kostenlos ist am besten (€0)", value: "free", nextText: "Die besten Dinge sind umsonst." },
          { label: "Niedrig (€0-15)", value: "low", nextText: "Budgetfreundliche Wahl." },
          { label: "Mittel (€15-30)", value: "medium", nextText: "Eine solide Investition." },
          { label: "Hoch (€30+)", value: "high", nextText: "Gönn dir was!" }
        ]
      },
      {
        id: 'surprise',
        text: "Möchtest du eine sichere Wahl oder etwas Unerwartetes?",
        options: [
          { label: "Sichere Wahl", value: "safe", nextText: "Zuverlässig und lustig." },
          { label: "Etwas Neues", value: "new", nextText: "Frische Erfahrungen voraus." },
          { label: "Überrasch mich", value: "surprise", nextText: "Mal sehen, was passiert!" }
        ]
      }
    ]
  },
  fr: {
    title: 'EUREGIO',
    subtitle: 'Découverte Culturelle',
    discover: 'Découvrir',
    liked: 'Favoris',
    question: 'Question',
    matchesLeft: 'Matchs Restants',
    results: 'Résultats',
    foundForYou: 'Trouvé pour vous.',
    basedOnMood: 'Selon votre humeur.',
    wildcard: 'Wildcard',
    feelingAdventurous: 'Envie d\'aventure ?',
    wildcardDesc: 'Pop-up secret à Liège ce soir. Randonnée requise, ambiance inégalée.',
    tellMeMore: 'En savoir plus',
    startOver: 'Recommencer',
    startJourney: 'Commencez votre voyage',
    landingTitle: 'Découvrez votre Euregio',
    landingDesc: 'Trouvez les événements culturels parfaits dans la région Euregio. Répondez à quelques questions rapides et nous ferons correspondre votre humeur, votre énergie et vos préférences à des expériences locales uniques.',
    confirmReset: 'Êtes-vous sûr de vouloir recommencer ?',
    yes: 'Oui',
    no: 'Non',
    infoTitle: 'Comment ça marche',
    infoDesc: 'Répondez à 8 questions rapides pour trouver les événements culturels parfaits dans la région Euregio. Nous correspondons à votre humeur, votre énergie et vos préférences.',
    noResults: 'Aucun match exact trouvé.',
    tryAgain: 'Essayez d\'ajuster vos préférences.',
    favorites: 'Favoris.',
    likedEvents: 'Événements que vous avez aimés.',
    noFavorites: 'Pas encore de favoris.',
    startDiscovery: 'Commencer la découverte',
    free: 'GRATUIT',
    details: 'Détails',
    share: 'Partager',
    visitWebsite: 'Visiter le site web',
    genre: 'Genre / Humeur',
    eventType: 'Type d\'événement',
    when: 'Quand',
    socialVibe: 'Ambiance sociale',
    location: 'Lieu',
    distance: 'Distance',
    showOnMap: 'Voir sur la carte',
    distanceMethods: {
      nearby: 'À pied',
      regional: 'À vélo',
      far: 'En voiture'
    },
    matchesMood: 'Correspond à votre humeur {mood}',
    energyVibe: 'Ambiance d\'énergie {energy}',
    perfectFor: 'Parfait pour des sorties {social}',
    matchesPreference: 'Correspond à votre préférence pour les choix {surprise}',
    happening: 'Se passe {time}',
    greatMatch: 'Un excellent match pour votre profil',
    questions: [
      {
        id: 'mood',
        text: "De quoi avez-vous envie ?",
        options: [
          { label: "Détente & Relaxation", value: "relax", nextText: "Se détendre est un excellent choix." },
          { label: "Explorer & Découvrir", value: "explore", nextText: "L'aventure vous attend !" },
          { label: "Rencontrer des gens", value: "meet people", nextText: "Ambiance sociale en vue." },
          { label: "Choix Wildcard", value: "surprise me", nextText: "Attendez-vous à l'inattendu." }
        ]
      },
      {
        id: 'energy',
        text: "Voulez-vous quelque chose de calme ou de plus intense ?",
        options: [
          { label: "Bas - Rester tranquille", value: "low", nextText: "Peu d'énergie, grand confort." },
          { label: "Moyen - Équilibré", value: "medium", nextText: "Parfaitement équilibré." },
          { label: "Haut - Intensité totale", value: "high", nextText: "Niveaux d'énergie au sommet !" }
        ]
      },
      {
        id: 'social',
        text: "Allez-vous seul ou avec d'autres ?",
        options: [
          { label: "Juste moi", value: "solo", nextText: "Les aventures en solo sont les meilleures." },
          { label: "Avec des amis", value: "friends", nextText: "De bons moments avec des gens bien." },
          { label: "En rendez-vous", value: "date", nextText: "L'amour est dans l'air." },
          { label: "Avec un groupe", value: "group", nextText: "Plus on est de fous, plus on rit !" }
        ]
      },
      {
        id: 'type',
        text: "Plutôt musique, art ou autre chose ?",
        options: [
          { label: "Musique", value: "music", nextText: "Laissez le rythme vous guider." },
          { label: "Arts Visuels", value: "art", nextText: "Un régal pour les yeux." },
          { label: "Performance", value: "performance", nextText: "La scène est prête." },
          { label: "Cinéma", value: "cinema", nextText: "Lumière, caméra, action !" },
          { label: "Communauté", value: "community", nextText: "Se connecter avec les autres." },
          { label: "Extérieur", value: "outdoor", nextText: "Air frais, ondes positives." }
        ]
      },
      {
        id: 'distance',
        text: "Jusqu'où êtes-vous prêt à voyager ?",
        options: [
          { label: "À pied", value: "nearby", nextText: "On reste local aujourd'hui." },
          { label: "À vélo", value: "regional", nextText: "Une jolie petite balade." },
          { label: "En voiture", value: "far", nextText: "On va loin !" }
        ]
      },
      {
        id: 'time',
        text: "Quand voulez-vous y aller ?",
        options: [
          { label: "Aujourd'hui", value: "today", nextText: "Rien de tel que le présent." },
          { label: "Ce week-end", value: "weekend", nextText: "Quelque chose à attendre avec impatience." },
          { label: "Flexible", value: "flexible", nextText: "Quand l'envie vous prend." }
        ]
      },
      {
        id: 'budget',
        text: "Gratuit ou prêt à dépenser un peu ?",
        options: [
          { label: "Gratuit c'est mieux (€0)", value: "free", nextText: "Les meilleures choses sont gratuites." },
          { label: "Bas (€0-15)", value: "low", nextText: "Choix économique." },
          { label: "Moyen (€15-30)", value: "medium", nextText: "Un investissement solide." },
          { label: "Haut (€30+)", value: "high", nextText: "Faites-vous plaisir !" }
        ]
      },
      {
        id: 'surprise',
        text: "Voulez-vous un choix sûr ou quelque chose d'inattendu ?",
        options: [
          { label: "Choix sûr", value: "safe", nextText: "Fiable et amusant." },
          { label: "Quelque chose de nouveau", value: "new", nextText: "De nouvelles expériences à venir." },
          { label: "Surprenez-moi", value: "surprise", nextText: "Voyons ce qui se passe !" }
        ]
      }
    ]
  },
  es: {
    title: 'EUREGIO',
    subtitle: 'Descubrimiento Cultural',
    discover: 'Descubrir',
    liked: 'Favoritos',
    question: 'Pregunta',
    matchesLeft: 'Coincidencias Restantes',
    results: 'Resultados',
    foundForYou: 'Encontrado para ti.',
    basedOnMood: 'Según tu estado de ánimo.',
    wildcard: 'Comodín',
    feelingAdventurous: '¿Te sientes aventurero?',
    wildcardDesc: 'Pop-up secreto en Lieja esta noche. Se requiere caminata, ambiente inigualable.',
    tellMeMore: 'Cuéntame más',
    startOver: 'Empezar de nuevo',
    startJourney: 'Comienza tu viaje',
    landingTitle: 'Descubre tu Euregio',
    landingDesc: 'Encuentra los eventos culturales perfectos en la región Euregio. Responde a unas cuantas preguntas rápidas y adaptaremos tu estado de ánimo, energía y preferencias a experiencias locales únicas.',
    confirmReset: '¿Estás seguro de que quieres empezar de nuevo?',
    yes: 'Sí',
    no: 'No',
    infoTitle: 'Cómo funciona',
    infoDesc: 'Responde 8 preguntas rápidas para encontrar los eventos culturales perfectos en la región Euregio. Coincidimos con tu estado de ánimo, energía y preferencias.',
    noResults: 'No se encontraron coincidencias exactas.',
    tryAgain: 'Intenta ajustar tus preferencias.',
    favorites: 'Favoritos.',
    likedEvents: 'Eventos que te han gustado.',
    noFavorites: 'Aún no hay favoritos.',
    startDiscovery: 'Iniciar Descubrimiento',
    free: 'GRATIS',
    details: 'Detalles',
    share: 'Compartir',
    visitWebsite: 'Visitar sitio web',
    genre: 'Género / Ánimo',
    eventType: 'Tipo de evento',
    when: 'Cuándo',
    socialVibe: 'Ambiente social',
    location: 'Ubicación',
    distance: 'Distancia',
    showOnMap: 'Ver en el mapa',
    distanceMethods: {
      nearby: 'A pie',
      regional: 'En bici',
      far: 'En coche'
    },
    matchesMood: 'Coincide con tu ánimo {mood}',
    energyVibe: 'Vibras de energía {energy}',
    perfectFor: 'Perfecto para salidas {social}',
    matchesPreference: 'Coincide con tu preferencia por opciones {surprise}',
    happening: 'Sucede {time}',
    greatMatch: 'Una gran coincidencia para tu perfil',
    questions: [
      {
        id: 'mood',
        text: "¿De qué tienes ganas?",
        options: [
          { label: "Relajarse y desconectar", value: "relax", nextText: "Relajarse es una gran elección." },
          { label: "Explorar y descubrir", value: "explore", nextText: "¡La aventura te espera!" },
          { label: "Conocer gente", value: "meet people", nextText: "Vibras sociales en camino." },
          { label: "Elección Comodín", value: "surprise me", nextText: "Espera lo inesperado." }
        ]
      },
      {
        id: 'energy',
        text: "¿Quieres algo tranquilo o más intenso?",
        options: [
          { label: "Bajo - Mantenerlo tranquilo", value: "low", nextText: "Poca energía, mucha comodidad." },
          { label: "Medio - Vibras equilibradas", value: "medium", nextText: "Perfectamente equilibrado." },
          { label: "Alto - Intensidad total", value: "high", nextText: "¡Niveles de energía al máximo!" }
        ]
      },
      {
        id: 'social',
        text: "¿Vas solo o con otros?",
        options: [
          { label: "Solo yo", value: "solo", nextText: "Las aventuras en solitario son las mejores." },
          { label: "Con amigos", value: "friends", nextText: "Buenos momentos con buena gente." },
          { label: "En una cita", value: "date", nextText: "El romance está en el aire." },
          { label: "Con un grupo", value: "group", nextText: "¡Cuantos más, mejor!" }
        ]
      },
      {
        id: 'type',
        text: "¿Más de música, arte o algo diferente?",
        options: [
          { label: "Música", value: "music", nextText: "Deja que el ritmo te guíe." },
          { label: "Artes Visuales", value: "art", nextText: "Un festín para los ojos." },
          { label: "Actuación", value: "performance", nextText: "El escenario está listo." },
          { label: "Cine", value: "cinema", nextText: "Luces, cámara, ¡acción!" },
          { label: "Comunidad", value: "community", nextText: "Conectando con otros." },
          { label: "Al aire libre", value: "outdoor", nextText: "Aire fresco, buenas vibras." }
        ]
      },
      {
        id: 'distance',
        text: "¿Qué tan lejos estás dispuesto a viajar?",
        options: [
          { label: "A pie", value: "nearby", nextText: "Hoy nos quedamos cerca." },
          { label: "En bicicleta", value: "regional", nextText: "Un paseo agradable." },
          { label: "En coche", value: "far", nextText: "¡Vamos lejos!" }
        ]
      },
      {
        id: 'time',
        text: "¿Cuándo quieres ir?",
        options: [
          { label: "Hoy", value: "today", nextText: "No hay momento como el presente." },
          { label: "Este fin de semana", value: "weekend", nextText: "Algo que esperar con ansias." },
          { label: "Flexible", value: "flexible", nextText: "Cuando surja el ánimo." }
        ]
      },
      {
        id: 'budget',
        text: "¿Debe ser gratis o estás bien gastando un poco?",
        options: [
          { label: "Gratis es mejor (€0)", value: "free", nextText: "Las mejores cosas son gratis." },
          { label: "Bajo (€0-15)", value: "low", nextText: "Opción económica." },
          { label: "Medio (€15-30)", value: "medium", nextText: "Una inversión sólida." },
          { label: "Alto (€30+)", value: "high", nextText: "¡Date un capricho!" }
        ]
      },
      {
        id: 'surprise',
        text: "¿Quieres una elección segura o algo inesperado?",
        options: [
          { label: "Elección segura", value: "safe", nextText: "Fiable y divertido." },
          { label: "Algo nuevo", value: "new", nextText: "Nuevas experiencias por delante." },
          { label: "Sorpréndeme", value: "surprise", nextText: "¡Veamos qué pasa!" }
        ]
      }
    ]
  },
  it: {
    title: 'EUREGIO',
    subtitle: 'Scoperta Culturale',
    discover: 'Scopri',
    liked: 'Preferiti',
    question: 'Domanda',
    matchesLeft: 'Corrispondenze Rimanenti',
    results: 'Risultati',
    foundForYou: 'Trovato per te.',
    basedOnMood: 'In base al tuo umore.',
    wildcard: 'Wildcard',
    feelingAdventurous: 'Ti senti avventuroso?',
    wildcardDesc: 'Pop-up segreto a Liegi stasera. Escursione richiesta, atmosfera impareggiabile.',
    tellMeMore: 'Dimmi di più',
    startOver: 'Ricomincia',
    startJourney: 'Inizia il tuo viaggio',
    landingTitle: 'Scopri la tua Euregio',
    landingDesc: 'Trova i perfetti eventi culturali nella regione Euregio. Rispondi a qualche breve domanda e abbineremo il tuo umore, la tua energia e le tue preferenze a esperienze locali uniche.',
    confirmReset: 'Sei sicuro di voler ricominciare?',
    yes: 'Sì',
    no: 'No',
    infoTitle: 'Come funziona',
    infoDesc: 'Rispondi a 8 brevi domande per trovare i perfetti eventi culturali nella regione Euregio. Abbiniamo il tuo umore, la tua energia e le tue preferenze.',
    noResults: 'Nessuna corrispondenza esatta trovata.',
    tryAgain: 'Prova a regolare le tue preferenze.',
    favorites: 'Preferiti.',
    likedEvents: 'Eventi che ti sono piaciuti.',
    noFavorites: 'Ancora nessun preferito.',
    startDiscovery: 'Inizia Scoperta',
    free: 'GRATIS',
    details: 'Dettagli',
    share: 'Condividi',
    visitWebsite: 'Visita il sito web',
    genre: 'Genere / Umore',
    eventType: 'Tipo di evento',
    when: 'Quando',
    socialVibe: 'Atmosfera sociale',
    location: 'Luogo',
    distance: 'Distanza',
    showOnMap: 'Mostra sulla mappa',
    distanceMethods: {
      nearby: 'A piedi',
      regional: 'In bici',
      far: 'In auto'
    },
    matchesMood: 'Corrisponde al tuo umore {mood}',
    energyVibe: 'Vibrazioni di energia {energy}',
    perfectFor: 'Perfetto per uscite {social}',
    matchesPreference: 'Corrisponde alla tua preferenza per scelte {surprise}',
    happening: 'Succede {time}',
    greatMatch: 'Un ottimo abbinamento per il tuo profilo',
    questions: [
      {
        id: 'mood',
        text: "Di che umore sei?",
        options: [
          { label: "Relax e svago", value: "relax", nextText: "Rilassarsi è un'ottima scelta." },
          { label: "Esplora e scopri", value: "explore", nextText: "L'avventura ti aspetta!" },
          { label: "Incontra persone", value: "meet people", nextText: "Vibrazioni sociali in arrivo." },
          { label: "Scelta Wildcard", value: "surprise me", nextText: "Aspettati l'inaspettato." }
        ]
      },
      {
        id: 'energy',
        text: "Vuoi qualcosa di tranquillo o più intenso?",
        options: [
          { label: "Basso - Mantienilo calmo", value: "low", nextText: "Poca energia, massimo comfort." },
          { label: "Medio - Vibrazioni equilibrate", value: "medium", nextText: "Perfettamente bilanciato." },
          { label: "Alto - Intensità totale", value: "high", nextText: "Livelli di energia al massimo!" }
        ]
      },
      {
        id: 'social',
        text: "Vai da solo o con altri?",
        options: [
          { label: "Solo io", value: "solo", nextText: "Le avventure in solitaria sono le migliori." },
          { label: "Con amici", value: "friends", nextText: "Bei momenti con belle persone." },
          { label: "Per un appuntamento", value: "date", nextText: "Il romanticismo è nell'aria." },
          { label: "Con un gruppo", value: "group", nextText: "Più siamo, meglio è!" }
        ]
      },
      {
        id: 'type',
        text: "Più interessato a musica, arte o altro?",
        options: [
          { label: "Musica", value: "music", nextText: "Lascia che il ritmo ti guidi." },
          { label: "Arti Visive", value: "art", nextText: "Una festa per gli occhi." },
          { label: "Performance", value: "performance", nextText: "Il palco è pronto." },
          { label: "Cinema", value: "cinema", nextText: "Luci, camera, azione!" },
          { label: "Comunità", value: "community", nextText: "Connettersi con gli altri." },
          { label: "All'aperto", value: "outdoor", nextText: "Aria fresca, buone vibrazioni." }
        ]
      },
      {
        id: 'distance',
        text: "Quanto sei disposto a viaggiare?",
        options: [
          { label: "A piedi", value: "nearby", nextText: "Oggi restiamo in zona." },
          { label: "In bicicletta", value: "regional", nextText: "Un bel giretto." },
          { label: "In auto", value: "far", nextText: "Andiamo lontano!" }
        ]
      },
      {
        id: 'time',
        text: "Quando vuoi andare?",
        options: [
          { label: "Oggi", value: "today", nextText: "Non c'è momento migliore del presente." },
          { label: "Questo fine settimana", value: "weekend", nextText: "Qualcosa da aspettare con ansia." },
          { label: "Flessibile", value: "flexible", nextText: "Quando capita l'ispirazione." }
        ]
      },
      {
        id: 'budget',
        text: "Deve essere gratuito o sei disposto a spendere un po'?",
        options: [
          { label: "Gratis è meglio (€0)", value: "free", nextText: "Le cose migliori sono gratis." },
          { label: "Basso (€0-15)", value: "low", nextText: "Scelta economica." },
          { label: "Medio (€15-30)", value: "medium", nextText: "Un investimento solido." },
          { label: "Alto (€30+)", value: "high", nextText: "Concediti un regalo!" }
        ]
      },
      {
        id: 'surprise',
        text: "Vuoi una scelta sicura o qualcosa di inaspettato?",
        options: [
          { label: "Scelta sicura", value: "safe", nextText: "Affidabile e divertente." },
          { label: "Qualcosa di nuovo", value: "new", nextText: "Nuove esperienze in arrivo." },
          { label: "Sorprendimi", value: "surprise", nextText: "Vediamo cosa succede!" }
        ]
      }
    ]
  }
};
