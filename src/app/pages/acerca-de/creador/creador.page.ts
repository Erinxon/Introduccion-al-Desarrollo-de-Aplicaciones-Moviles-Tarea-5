import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Creador } from '../models/creador.models';
import { AcercaDeService } from '../services/acerca-de.service';

@Component({
  selector: 'app-creador',
  templateUrl: './creador.page.html',
  styleUrls: ['./creador.page.scss'],
})
export class CreadorPage implements OnInit {
  creador: Creador;
  constructor(private router: ActivatedRoute, private acercaDeService: AcercaDeService) { }

  ngOnInit() {
    const id = Number(this.router.snapshot.params['id']);
    this.creador = this.acercaDeService.getCreador(id);
  }

}
