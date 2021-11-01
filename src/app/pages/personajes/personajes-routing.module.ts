import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonajesPage } from './personajes.page';

const routes: Routes = [
  {
    path: '',
    component: PersonajesPage
  },
  {
    path: 'personaje/:id',
    loadChildren: () => import('./personaje/personaje.module').then( m => m.PersonajePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonajesPageRoutingModule {}
