import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcercaDePage } from './acerca-de.page';

const routes: Routes = [
  {
    path: '',
    component: AcercaDePage
  },
  {
    path: 'creador/:id',
    loadChildren: () => import('./creador/creador.module').then( m => m.CreadorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcercaDePageRoutingModule {}
