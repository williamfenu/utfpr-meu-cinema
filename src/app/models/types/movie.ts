export interface Movie {
  id?: number;
  name: string;
  comments?: string;
  status: 'not_watched' | 'wish_watch' | 'watched';
  cover?: string | null;
}
