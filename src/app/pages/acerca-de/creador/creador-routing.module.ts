import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreadorPage } from './creador.page';

const routes: Routes = [
  {
    path: '',
    component: CreadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreadorPageRoutingModule {}
