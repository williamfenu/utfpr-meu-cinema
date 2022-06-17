import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './land-page/land-page.component';
import { LibraryComponent } from './library/library.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'inicio', component: MainComponent },
  { path: 'biblioteca', component: LibraryComponent },
  { path: 'filme/:id', component: FormComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
