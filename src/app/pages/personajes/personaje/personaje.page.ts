import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from '../models/personaje.models';
import { PersonajesService } from '../services/personajes.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.page.html',
  styleUrls: ['./personaje.page.scss'],
})
export class PersonajePage implements OnInit {
  personaje: Personaje;

  constructor(private personajesService: PersonajesService, private router: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.router.snapshot.params['id']);
    this.personaje = this.personajesService.getPersonaje(id)
  }

}
