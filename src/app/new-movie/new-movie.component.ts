import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MovieService } from '../services/movie.service';
import { Movie } from '../models/types/movie';
@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css'],
})
export class NewMovieComponent implements OnInit {
  constructor(private router: Router, private movieService: MovieService) {}

  ngOnInit(): void {}

  onValidMovie(movie: Movie) {
    this.movieService
      .save(movie)
      .subscribe({
        error: (error) => M.toast({ html: error }),
        complete: () => this.router.navigate(['/inicio']),
      });
  }
}
