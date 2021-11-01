import { Injectable } from '@angular/core';
import { Creador } from '../models/creador.models';
import { InfoSerie } from '../models/info-serie.models';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {
  private infoSerie: InfoSerie;

  constructor() {
    this.infoSerie = {
      titulo: 'Lost (Perdidos)',
      protagonistas: ['Adewale Akinnuoye-Agbaje',
        'Sam Anderson',
        'Naveen Andrews',
        'L. Scott Caldwell',
        'Néstor Carbonell',
        'François Chau',
        'Henry Ian Cusick',
        'Jeremy Davies',
        'Emilie de Ravin',
        'Michael Emerson',
        'Jeff Fahey',
        'Fionnula Flanagan',
        'Matthew Fox',
        'Jorge García',
        'Maggie Grace',
        'Josh Holloway',
        'Malcolm David Kelley',
        'Daniel Dae Kim',
        'Yunjin Kim',
        'Ken Leung',
        'Evangeline Lilly',
        'Rebecca Mader',
        'Elizabeth Mitchell',
        'Dominic Monaghan',
        "Terry O'Quinn",
        'Harold Perrineau',
        'Zuleikha Robinson',
        'Michelle Rodriguez',
        'Kiele Sánchez',
        'Rodrigo Santoro',
        'Ian Somerhalder',
        'John Terry',
        'Sonya Walger',
        'Cynthia Watros',
        'Fredric Lehne',
        'William Mapother',
        'Mira Furlan',
        'Tania Raymonde',
        'Alan Dale',
        'M. C. Gainey',
        'Kimberley Joseph'],
      resumen: 'La serie narra las vivencias de los pasajeros supervivientes del vuelo 815 de Oceanic Airlines Sídney-Los Ángeles en una isla aparentemente desierta, en la cual ocurren cosas muy extrañas. Con frecuencia hace referencia de manera específica a las historias de los protagonistas antes del accidente, con lo que explica las decisiones que estos toman en la isla, el motivo por el cual tomaron ese avión; y, para mostrar que ellos, sin saberlo, estaban perdidos en sus vidas.',
      idiomaOriginal: 'Inglés',
      numTemporadas: 6,
      numEpisodios: 121,
      primeraEmision: '22 de septiembre de 2004',
      ultimaEmision: '	23 de octubre de 2010',
      creadores: [
        { id: 1, nombre: 'Jeffrey Jacob Abrams', img: 'assets/images/creadores/creador1.jpg', nacionalidad: 'Estadounidense', lenguaMaterna: 'Inglés', biografia: 'Jeffrey Jacob Abrams (Nueva York, 27 de junio de 1966), más conocido como J. J. Abrams, es un director, productor, escritor, actor y compositor de cine y televisión estadounidense. Es propietario de la productora de cine Bad Robot Productions, es famoso por ser el director de la exitosa serie Lost, del reboot de Star Trek y su secuela, y de los episodios VII y IX de Star Wars.' },
        { id: 2, nombre: 'Damon Lindelof', img: 'assets/images/creadores/creador2.jpg', nacionalidad: 'Estadounidense', lenguaMaterna: 'Inglés', biografia: 'Damon L. Lindelof (Teaneck, Nueva Jersey; 24 de abril de 1973) es un productor ejecutivo y guionista de cine y televisión estadounidense. Es uno de los co-creadores, productores y guionistas principales de la serie Lost. Además de ser el cocreador de la serie de televisión The Leftovers para HBO, adaptada de la novela de Tom Perrotta.' }
      ],
    }
  }

  getInfoSerie(): InfoSerie {
    return this.infoSerie;
  }

  getCreador(id: number): Creador {
    return this.infoSerie.creadores.find(creador => creador.id === id);
  }
}
