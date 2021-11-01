import { Component, OnInit } from '@angular/core';
import { Momento } from './models/momento.models';

@Component({
  selector: 'app-momentos',
  templateUrl: './momentos.page.html',
  styleUrls: ['./momentos.page.scss'],
})
export class MomentosPage implements OnInit {
  momentos: Momento[] = [];

  constructor() {
    
  }

  ngOnInit() {
    this.momentos = [
      {
        titulo: 'Jack Sigue Adelante Con Sus Seres Queridos',
        img: '../../../assets/images/momentos/momento1.jpg',
        descripciones: ['El final del final de la serie es el momento más conmovedor de Lost . Es gratificante ver a Jack, sus seres queridos y los supervivientes que se convirtieron en su familia habiendo recordado sus vidas, ahora reunidos y listos para seguir adelante juntos.',
        'Los lazos significativos que Jack forjó con estos individuos trascienden la muerte misma. Después de todo lo que Jack y los demás soportaron, es reconfortante saber que han encontrado la paz, la felicidad y que están juntos a medida que avanzan.'],
      },
      {
        titulo: 'Llamada Telefónica De Desmond Y Penny',
        img: '../../../assets/images/momentos/momento2.jpg',
        descripciones: ['"The Constant" a menudo se considera uno de los mejores episodios de Lost . Si bien suceden muchas cosas aquí, el momento más memorable del episodio es la llamada telefónica de Desmond y Penny.',
        'Desmond nunca pensó que era lo suficientemente bueno para ella, especialmente desde que  el padre de Penny, Charles Widmore, trató de destruir su relación.'],
      },
      {
        titulo: 'Rose Y Bernard Acuerdan Quedarse En La Isla Para Siempre',
        img: '../../../assets/images/momentos/momento3.jpg',
        descripciones: ['Rose y Bernard son la pareja más sana de Lost . Puede que hayan encontrado el amor más tarde en la vida, pero se aman incondicionalmente y como si hubieran estado casados ​​durante muchos años.',
        'Después de que Rose le dice a Bernard que no quería irse de la isla porque creía que se enfermaría de nuevo si se iba, Bernard le promete a Rose que no dejará ni la isla ni ella nunca más.'],
      },
      {
        titulo: 'Poner En Funcionamiento La Furgoneta Dharma',
        img: '../../../assets/images/momentos/momento4.jpg',
        descripciones: ['Hurley pasa la mayor parte del episodio de la temporada 3 "Tricia Tanaka Is Dead" tratando de hacer funcionar una camioneta averiada de la Iniciativa Dharma. Mientras Charlie, Jin y Sawyer ayudan a Hurley a lo largo del episodio, luchan por ver por qué arreglar la camioneta es tan importante para Hurley.'],
      }
    ];
  }

}
