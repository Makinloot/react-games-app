// root response
interface IRoot {
  count: number;
  next: string | null;
  previous: string | null;
  user_platforms?: boolean;
}

// game results types
export interface IGameData {
  achievement_count?: number;
  added: number;
  added_by_status: statusTypes;
  additions_count: number;
  alternative_names?: [];
  background_image: string;
  background_image_additional?: string;
  clip: any;
  creators_count?: number;
  description: string;
  description_raw: string;
  developers?: developersTypes[];
  dominant_color: string;
  esb_rating: esrbTypes;
  game_series_count?: number;
  genres: genresTypes[];
  id: number;
  metacritic: number;
  metacritic_platforms?: [];
  metacritic_url?: string;
  movies_count?: number;
  name: string;
  name_original?: string;
  parent_achievements_count?: number;
  parent_platforms: parentPlatformTypes[];
  parents_count?: number;
  platforms: platformsTypes[];
  playtime: number;
  publishers?: publishersTypes[];
  rating: number;
  rating_top: number;
  ratings: ratingsTypes[];
  ratings_count: number;
  reactions?: any;
  reddit_count?: number;
  reddit_description?: string;
  reddit_logo?: string;
  reddit_name?: string;
  reddit_url?: string;
  released: string;
  reviews_count: number;
  reviews_text_count: number;
  saturated_color: string;
  screenshots_count?: number;
  short_screenshots?: screenshotsTypes[];
  slug: string;
  stores: storesTypes[];
  suggestions_count: number;
  tags: tagsTypes[];
  tba: boolean;
  twitch_count?: number;
  updated: string;
  user_game: any;
  website?: string;
  youtube_count?: number;
}

// fetch games
export interface IGames extends IRoot {
  results: IGameData[];
}

// screenshot result types
interface IScreenResults {
  height: number;
  id: number;
  image: string;
  is_deleted: boolean;
  width: number;
}

export interface IScnreenshots extends IRoot {
  results: IScreenResults[]
}

// trailer result types
interface ITrailerResults {
  data: {
    480: string;
    max: string;
  },
  id: number;
  name: string;
  preview: string;
}

export interface ITrailers extends IRoot {
  results: ITrailerResults[];
}