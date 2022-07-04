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
  @Input() buttonLabel!: String;
  @Input() movie: Movie = {
    id: undefined,
    cover: '/assets/default-placeholder.png',
    name: '',
    status: 'not_watched',
    comments: '',
  };
  coverIdTemp: number | undefined;

  constructor(
    private domSanitizer: DomSanitizer,
    private coverService: CoverService
  ) {}

  ngOnInit(): void {}

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
              this.coverIdTemp = response.id;
              const url = this.domSanitizer.sanitize(
                SecurityContext.RESOURCE_URL,
                this.domSanitizer.bypassSecurityTrustResourceUrl(response.data)
              );
              this.movie.cover = url;
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
    if (this.coverIdTemp) {
      this.coverService.delete(this.coverIdTemp);
    }
  }

  submitForm() {
    this.validSubmit.emit(this.movie);
  }
}
