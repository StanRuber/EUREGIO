export interface Event {
  id: string;
  name: string;
  description: string;
  city: string;
  mood: string[];
  energy_level: 'low' | 'medium' | 'high';
  social_context: ('solo' | 'friends' | 'date' | 'group')[];
  event_type: ('music' | 'art' | 'performance' | 'community' | 'outdoor' | 'cinema')[];
  travel_distance_from_maastricht: 'nearby' | 'regional' | 'far';
  date_category: ('today' | 'weekend' | 'flexible')[];
  budget_level: 'free' | 'low' | 'medium' | 'high';
  surprise_level: ('safe' | 'new' | 'surprise')[];
  image_url: string;
  url: string;
}

export interface UserAnswers {
  mood?: string;
  energy?: 'low' | 'medium' | 'high';
  social?: 'solo' | 'friends' | 'date' | 'group';
  type?: 'music' | 'art' | 'performance' | 'community' | 'outdoor' | 'cinema';
  distance?: 'nearby' | 'regional' | 'far';
  time?: 'today' | 'weekend' | 'flexible';
  budget?: 'free' | 'low' | 'medium' | 'high';
  surprise?: 'safe' | 'new' | 'surprise';
}

export interface Question {
  id: string;
  text: string;
  options: {
    label: string;
    value: any;
    nextText?: string;
  }[];
}
