export interface WelcomeContent {
  message: string;
  backgroundImage: string;
}

export interface DiningHours {
  breakfast: string;
  lunchDinner: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  unavailable?: boolean;
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface MenuCategory {
  id: string;
  title: string;
  sections: MenuSection[];
}

export interface DiningContent {
  hours: DiningHours;
  categories: MenuCategory[];
}

export interface WeeklyEvent {
  id: string;
  name: string;
  day: string;
  date: string;
  time: string;
  description: string;
  location?: string;
}

export interface IslandSubsection {
  id: string;
  title: string;
  items: string[];
}

export interface IslandContent {
  subsections: IslandSubsection[];
}

export interface Partner {
  id: string;
  name: string;
  category: string;
  description: string;
  details: string;
  bookingNote: string;
  recommendation?: string;
  imageUrl?: string;
}

export interface ToursContent {
  partners: Partner[];
  snorkelingNote: string;
}

export interface PortalMedia {
  diningBanner: string;
  eventsBanner: string;
  islandBanner: string;
  islandInline: string;
  toursBanner: string;
}

export interface PortalContent {
  welcome: WelcomeContent;
  media?: PortalMedia;
  dining: DiningContent;
  events: WeeklyEvent[];
  island: IslandContent;
  tours: ToursContent;
}
