import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SecurityContext,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { CoverService } from 'src/app/services/cover.service';

import { Movie } from '../../models/types/movie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
})
export class MovieFormComponent implements OnInit {
  @Output() validSubmit = new EventEmitter();
  @Output() onRemoveMovie = new EventEmitter();
  @Input() buttonLabel!: String;
  @Input() movie: Movie = {
    id: undefined,
    cover: 'assets/default-placeholder.png',
    name: '',
    status: 'wish_watch',
    comments: '',
  };
  wishToWatchActive = true;
  watchedActive = false;
  tempCoverId = 0;

  constructor(
    private domSanitizer: DomSanitizer,
    private coverService: CoverService
  ) {}

  ngOnInit(): void {}

  ngAfterContentChecked(): void {
    if (this.movie && this.movie.id) {
      if (this.movie.status === 'watched') {
        this.wishToWatchActive = false;
        this.watchedActive = true;
      }
    }
  }

  onUpload(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (files) {
      const cover = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(cover);
      reader.onload = () => {
        this.coverService
          .save({
            data: reader.result?.toString()!,
            filename: cover.name,
            mimeType: cover.type,
          })
          .then((response) => {
            if (response) {
              this.tempCoverId = response.id ?? 0;
              const url = this.domSanitizer.sanitize(
                SecurityContext.RESOURCE_URL,
                this.domSanitizer.bypassSecurityTrustResourceUrl(response.data)
              );
              this.movie.cover = url ?? '';
            }
          });
      };
    }
  }

  //method based from: https://stackoverflow.com/questions/35940290/how-to-convert-base64-string-to-javascript-file-object-like-as-from-file-input-f
  dataURLtoFile = (dataurl: string, filename: string): File => {
    var arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  };

  ngOnDestroy() {
    if (this.tempCoverId) {
      this.coverService.delete(this.tempCoverId);
    }
  }

  toggleActiveStatus(status: 'wish_watch' | 'watched') {
    this.movie.status = status;

    if (status === 'wish_watch') {
      this.wishToWatchActive = true;
      this.watchedActive = false;
    } else {
      this.wishToWatchActive = false;
      this.watchedActive = true;
    }
  }

  submitForm() {
    this.validSubmit.emit(this.movie);
  }

  handleRemove() {
    this.onRemoveMovie.emit(this.movie);
  }
}
