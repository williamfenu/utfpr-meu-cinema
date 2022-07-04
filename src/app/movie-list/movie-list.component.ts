import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/types/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Input() title = '';
  @Input() movies: Movie[] = [];
  constructor() {}

  ngOnInit(): void {}
}
