import { Creador } from "./creador.models";

export interface InfoSerie {
  titulo: string;
  protagonistas: string[];
  resumen: string;
  idiomaOriginal: string;
  numTemporadas: number;
  numEpisodios: number;
  primeraEmision: string;
  ultimaEmision: string;
  creadores: Creador[];
}