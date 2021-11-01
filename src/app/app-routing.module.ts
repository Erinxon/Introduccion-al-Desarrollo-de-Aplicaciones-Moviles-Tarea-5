import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'portada',
    pathMatch: 'full'
  },
  {
    path: 'portada',
    loadChildren: () => import('./pages/portada/portada.module').then( m => m.PortadaPageModule)
  },
  {
    path: 'personajes',
    loadChildren: () => import('./pages/personajes/personajes.module').then( m => m.PersonajesPageModule)
  },
  {
    path: 'momentos',
    loadChildren: () => import('./pages/momentos/momentos.module').then( m => m.MomentosPageModule)
  },
  {
    path: 'acerca-de',
    loadChildren: () => import('./pages/acerca-de/acerca-de.module').then( m => m.AcercaDePageModule)
  },
  {
    path: 'en-mi-vida',
    loadChildren: () => import('./pages/en-mi-vida/en-mi-vida.module').then( m => m.EnMiVidaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
