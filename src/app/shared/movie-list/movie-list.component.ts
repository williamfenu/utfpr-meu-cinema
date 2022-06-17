import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie, movieSamples } from '../../models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  iconPath = this.getAssetFromFolder('movie-icon.png');
  tittle = '';
  @Output() mostrarSpanEvent = new EventEmitter<string>();
  movies: Movie[] = movieSamples;
  constructor() {}

  ngOnInit(): void {}

  getAssetFromFolder(filename: string): string {
    return `/assets/${filename}`;
  }

  mostrarSpan() {
    this.mostrarSpanEvent.emit();
  }
}
