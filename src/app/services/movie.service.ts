import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { Movie } from '../models/types/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url: string;

  constructor(private client: HttpClient) {
    this.url = 'http://localhost:3000/movies';
  }

  save(movie: Movie): Observable<Movie> {
    return this.client
      .post<Movie>(this.url, movie)
      .pipe(
        catchError((error) =>
          throwError(
            () =>
              new Error(
                `Ocorreu erro ao tentar salvar o filme no servidor, tente novamente mais tarde`
              )
          )
        )
      );
  }

  update(movie: Movie): Observable<Movie> {
    return this.client
      .put<Movie>(`${this.url}/${movie.id}`, movie)
      .pipe(
        catchError((error) =>
          throwError(
            () =>
              new Error(
                `Ocorreu erro ao tentar atualizar o filme no servidor, tente novamente mais tarde`
              )
          )
        )
      );
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

  delete(movie: Movie): Observable<Movie> {
    return this.client
      .delete<Movie>(`${this.url}/${movie.id}`)
      .pipe(
        catchError((error) =>
          throwError(
            () =>
              new Error(
                `Ocorreu erro ao tentar remover o filme ${movie.name} do servidor, tente novamente mais tarde`
              )
          )
        )
      );
  }
}
