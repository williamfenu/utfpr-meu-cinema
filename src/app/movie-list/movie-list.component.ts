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

  movieBadgeByStatus = {
    wish_watch: { label: 'Desejo assistir', color: '#FAB344' },
    watched: { label: 'Assistido', color: '#009141' },
  };
  constructor() {}

  ngOnInit(): void {}

  getBadgeLabel(status: 'wish_watch' | 'watched') {
    return this.movieBadgeByStatus[status].label;
  }

  getBadgeColor(status: 'wish_watch' | 'watched') {
    return this.movieBadgeByStatus[status].color;
  }
}
