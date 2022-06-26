export interface Movie {
  id: number | undefined;
  name: string;
  comments?: string;
  status: 'not_watched' | 'wish_watch' | 'watched';
  cover?: number | string;
}
