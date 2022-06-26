import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandPageComponent } from './land-page/land-page.component';
import { LibraryComponent } from './library/library.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NewMovieComponent } from './new-movie/new-movie.component';

const routes: Routes = [
  { path: 'inicio', component: LandPageComponent },
  { path: 'biblioteca', component: LibraryComponent },
  { path: 'filme/novo', component: NewMovieComponent },
  { path: 'filme/:id', component: MovieDetailsComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
