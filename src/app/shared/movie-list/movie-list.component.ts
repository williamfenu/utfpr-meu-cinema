import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieList } from '../../models/movieList';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  iconPath = this.getAssetFromFolder('movie-icon.png');
  tittle = '';
  @Output() mostrarSpanEvent = new EventEmitter<string>();
  movies: MovieList[] = [
    {
      id: 1,
      coverPath: this.getAssetFromFolder('star-war-a-new-hope-cover.jpg'),
      name: 'Star Wars - Uma nova esperança',
    },
    {
      id: 2,
      coverPath: this.getAssetFromFolder('coming-to-america-cover.jpg'),
      name: 'Um principe em Nova York',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  getAssetFromFolder(filename: string): string {
    return `/assets/${filename}`;
  }

  mostrarSpan() {
    this.mostrarSpanEvent.emit();
  }
}
