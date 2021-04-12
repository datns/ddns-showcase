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
