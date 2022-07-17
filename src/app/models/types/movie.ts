export interface Movie {
  id?: number;
  name: string;
  comments?: string;
  status: 'wish_watch' | 'watched';
  cover?: string | null;
}
