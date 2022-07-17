import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/types/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit {
  myLibrary: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getAll().subscribe({
      next: (movies) => (this.myLibrary = movies),
      error: (error) => M.toast({ html: error }),
    });
  }
}
