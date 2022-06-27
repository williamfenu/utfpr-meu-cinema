import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { Movie } from '../models/types/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url: string;

  constructor(private client: HttpClient) {
    this.url = 'http://localhost:3000/movies';
  }

  async save(movie: Movie): Promise<Movie> {
    return lastValueFrom(this.client.post<Movie>(this.url, movie));
  }

  async getAll(): Promise<Movie[]> {
    return lastValueFrom(this.client.get<Movie[]>(this.url));
  }
}
