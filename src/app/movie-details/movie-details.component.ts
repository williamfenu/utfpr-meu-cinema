import * as M from 'materialize-css';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../models/types/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie!: Movie;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MovieService
  ) {}

  ngOnInit(): void {
    this.service
      .findById(Number(this.route.snapshot.params['id']))
      .subscribe((movie) => (this.movie = movie));
  }

  ngAfterViewInit() {
    M.updateTextFields();
  }

  updateMovie(movie: Movie) {
    this.service.update(movie).subscribe({
      error: (error) => M.toast({ html: error }),
      complete: () => this.router.navigate(['/inicio']),
    });
  }

  handleRemove(movie: Movie) {
    this.service.delete(movie).subscribe({
      error: (error) => M.toast({ html: error }),
      complete: () => this.router.navigate(['/inicio']),
    });
  }
}
