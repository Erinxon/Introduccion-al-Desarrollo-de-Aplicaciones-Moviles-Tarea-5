import { Injectable } from '@angular/core';
import { Personaje } from '../models/personaje.models';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private personajes: Personaje[];

  constructor() {
    this.personajes = [
      { id: 1, nombre: 'Jack Shephard', img: 'assets/images/personajes/lost-jack-shepherd.jpg',
      estado: 'Muerto', ocupacion: 'Cirujano de columna vertebral', 
      historia: 'El Dr. Jack Shephard es el líder de los supervivientes del Vuelo Oceanic 815. Jack tiene dificultades para lidiar con situaciones que no debe arreglar. Sin embargo, esta habilidad para resolver problemas a través de la fe le ha dado la habilidad de reaccionar bien ante las crisis. Jack lleva el control de su propia vida y de sus emociones y es capaz de mantener la cabeza fría.' },
      { id: 2, nombre: 'Kate Austen', img: 'assets/images/personajes/kate-austen-lost.jpg',
      estado: 'Viva', ocupacion: 'Fugitiva', 
      historia: 'Nacida y criada en Iowa, Kate es la hija de Diane y Sam, un ranger del ejército estadounidense, que le enseñó a rastrear en el campo durante su niñez. Siendo niña, ella hizo amistad con Tom, y juntos enterraron una cápsula del tiempo bajo un gran árbol. Los padres de Kate se divorciaron más tarde y Diane se vuelve a casar con un alcohólico y maltratador llamado Wayne. Ya adulta, Kate saca una póliza de seguros sobre la casa y hace explotar el gas con su padrastro dentro; luego se lo confiesa a su madre. Esta llama a las autoridades causando la detención de Kate en un estación de autobuses por Edwards Mars.' },
      { id: 3, nombre: 'James "Sawyer" Ford', img: 'assets/images/personajes/james-sawyer.jpeg',
      estado: 'Vivo', ocupacion: 'Estafador', 
      historia: 'James Ford, más conocido con el alias de "Sawyer", es uno de los sobrevivientes de la sección central del vuelo de Oceanic 815. Su acento sureño, su egoísmo, su machismo y su uso de apodos ofensivos desmienten su lado, tierno y sofisticado, de ávido lector y hombre sensible, elementos de su personalidad que se han vuelto más evidentes según ha ido pasando más tiempo en la Isla.' },
      { id: 4, nombre: 'Juliet Burke', img: 'assets/images/personajes/JulietBurke.jpg',
      estado: 'Muerta', ocupacion: 'Doctora en fertilidad', 
      historia: 'La vida anterior de Juliet es desconocida hasta el momento en que en el capítulo No en Portland, se ve cómo se dedicaba a la investigación puntera en fertilidad humana, en Miami, y consiguió en secreto que su hermana Rachel quedara embarazada, lo que parece un éxito científico sin precedentes, ya que su aparato reproductor había sido lesionado por la quimioterapia.' },
    ];
  }

  getPersonajes(): Personaje[] {
    return this.personajes;
  }

  getPersonaje(id: number): Personaje {
    return this.personajes.find(personaje => personaje.id === id);
  }
}
