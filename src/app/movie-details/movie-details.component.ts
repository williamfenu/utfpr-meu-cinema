import * as M from 'materialize-css';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/types/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie!: Movie;

  constructor(private route: ActivatedRoute, private service: MovieService) {}

  ngOnInit(): void {
    this.service
      .findById(Number(this.route.snapshot.params['id']))
      .subscribe((movie) => (this.movie = movie));
  }

  ngAfterViewInit() {
    M.updateTextFields();
  }
}
