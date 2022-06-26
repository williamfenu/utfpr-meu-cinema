import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/types/movie';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
})
export class MovieFormComponent implements OnInit {
  @Input() buttonLabel!: String;
  imageUrl: SafeUrl | string = '/assets/default-placeholder.png';
  @Input() movie: Movie = {
    id: undefined,
    cover: undefined,
    name: '',
    status: 'not_watched',
    comments: '',
  };

  constructor(
    private router: Router,
    private indexedDBService: NgxIndexedDBService,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}

  onUpload(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (files) {
      const cover = files[0];

      this.indexedDBService
        .add('covers', { data: cover })
        .subscribe((savedCover) => {
          this.movie.cover = savedCover.id;
          this.imageUrl = this.domSanitizer.bypassSecurityTrustUrl(
            URL.createObjectURL(savedCover.data)
          );
        });
    }
  }

  onValidSubmit() {
    const movies = localStorage.getItem('utfpr-meu-cinema/user-movies');
    if (movies) {
      const storedMoviesArray = JSON.parse(movies);
      console.log(storedMoviesArray);
      storedMoviesArray.push({
        ...this.movie,
        id: storedMoviesArray.length + 1,
      });
      localStorage.setItem(
        'utfpr-meu-cinema/user-movies',
        JSON.stringify(storedMoviesArray)
      );
    } else {
      localStorage.setItem(
        'utfpr-meu-cinema/user-movies',
        JSON.stringify([{ ...this.movie, id: 1 }])
      );
    }
    this.router.navigate(['/inicio']);
  }
}
