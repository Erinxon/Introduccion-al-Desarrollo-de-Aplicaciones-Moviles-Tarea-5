import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Portada', url: '/portada', icon: 'people' },
    { title: 'Personajes', url: '/personajes', icon: 'image' },
    { title: 'Momentos', url: '/momentos', icon: 'alarm' },
    { title: 'Acerca de', url: '/acerca-de', icon: 'help-circle' },
    { title: 'En mi vida', url: '/en-mi-vida', icon: 'heart' }
  ];
  constructor() {}
}