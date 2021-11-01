import { Component, OnInit } from '@angular/core';
import { Personaje } from './models/personaje.models';
import { PersonajesService } from './services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {
  personajes: Personaje[];

  constructor(private personajesService: PersonajesService) { }

  ngOnInit() {
   this.personajes = [...this.personajesService.getPersonajes()];
  }

}
