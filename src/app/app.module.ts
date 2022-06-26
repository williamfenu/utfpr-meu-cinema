import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandPageComponent } from './land-page/land-page.component';
import { ButtonComponent } from './shared/button/button.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { LibraryComponent } from './library/library.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ListTitleComponent } from './shared/list-title/list-title.component';
import { MovieFormComponent } from './shared/movie-form/movie-form.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { NgxIndexedDBModule } from 'ngx-indexed-db';

import { indexedDBConfig } from './config/dbConfig';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandPageComponent,
    ButtonComponent,
    MovieListComponent,
    LibraryComponent,
    MovieDetailsComponent,
    ListTitleComponent,
    MovieFormComponent,
    NewMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxIndexedDBModule.forRoot(indexedDBConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
