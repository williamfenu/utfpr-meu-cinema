import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, lastValueFrom, Observable, throwError } from 'rxjs';

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

  findById(movieId: number): Observable<Movie> {
    return this.client
      .get<Movie>(`${this.url}/${movieId}`)
      .pipe(
        catchError((error) =>
          throwError(
            () =>
              new Error(
                `Ocorreu erro ao tentar buscar o filme do servidor, tente novamente mais tarde`
              )
          )
        )
      );
  }

  getAll(): Observable<Movie[]> {
    return this.client
      .get<Movie[]>(this.url)
      .pipe(
        catchError((error) =>
          throwError(
            () =>
              new Error(
                `Ocorreu erro ao tentar buscar os filmes do servidor, tente novamente mais tarde`
              )
          )
        )
      );
  }
}
