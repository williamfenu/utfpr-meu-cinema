import * as M from 'materialize-css';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/types/movie';
import { movieSamples } from '../models/samples/movie-samples';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie!: Movie;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const foundMovie = movieSamples.find(
      (movie) => movie?.id?.toString() === this.route.snapshot.params['id']
    );

    if (foundMovie) {
      this.movie = foundMovie;
    }
  }

  ngAfterViewInit() {
    M.updateTextFields();
  }
}
