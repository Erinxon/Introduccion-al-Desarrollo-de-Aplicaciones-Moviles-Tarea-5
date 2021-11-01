import { Component, OnInit } from '@angular/core';
import { InfoSerie } from './models/info-serie.models';
import { AcercaDeService } from './services/acerca-de.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage implements OnInit {
  infoSerie: InfoSerie;

  constructor(private acercaDeService: AcercaDeService) { }

  ngOnInit() {
    this.infoSerie = this.acercaDeService.getInfoSerie();
  }

}
