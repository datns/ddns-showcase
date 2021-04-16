export interface Profile {
  id: number;
  profile: number;
}

export interface Movie {
  id: number;
  name: string;
  thumbnail: number;
  stillWatching: Profile[];
}

export interface ContinueMovie {
  id: number;
  name: string;
  thumbnail: number;
  overallProgress: string;
  details: {
    image: number;
    age: string;
    genre: string;
    ratings: number;
    season: string;
    currentEpisode: string;
    runningTime: string;
    progress: string;
  };
}
