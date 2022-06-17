import * as M from 'materialize-css';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, movieSamples } from '../models/movie';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  movie: Movie | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.movie = movieSamples.find(
      (movie) => movie.id.toString() === this.route.snapshot.params['id']
    );
  }

  ngAfterViewInit() {
    M.updateTextFields();
  }
}
