import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { Movie } from '../models/types/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css'],
})
export class LandPageComponent implements OnInit {
  wishToWatchMovies: Movie[] = [];
  recentAddedMovies: Movie[] = [];
  constructor(private service: MovieService) {}

  ngOnInit(): void {
    this.service
      .getAll()
      .pipe(
        tap(
          (movies) => (this.recentAddedMovies = movies.slice(0, 5).reverse())
        ),
        map((movies) =>
          movies.filter((movie) => movie.status === 'wish_watch')
        ),
        tap((movies) => (this.wishToWatchMovies = movies.slice(-5).reverse()))
      )
      .subscribe({ error: (error) => M.toast({ html: error }) });
  }
}
