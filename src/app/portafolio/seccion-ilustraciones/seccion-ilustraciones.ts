import { ChangeDetectionStrategy, Component, computed, Input, signal } from '@angular/core';
import { environment } from '../../../environments/environment';

export type TemaColor = 'negro' | 'morado';

export interface Proyectos {
  id: number,
  titulo: string,
  descripcion: string,
  etiquetas: string[],
  imagenUrl: string,
  tema: TemaColor
}

@Component({
  selector: 'app-seccion-ilustraciones',
  imports: [],
  templateUrl: './seccion-ilustraciones.html',
  styleUrl: './seccion-ilustraciones.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeccionIlustraciones {

  protected readonly assetsPath = environment.assetsUrl;

  @Input({required:true})
  InicioIndicesIds!: number

  @Input({required:true})
  FinalIndicesIds!: number

  proyectos = signal<Proyectos[]>([
    {
      "id": 1,
      "titulo": "Landing Vibrante y Enfocada",
      "descripcion": "Una landing page moderna diseñada para captar atención y comunicar valor de forma inmediata. Combina ilustración, ritmo visual y una estructura clara que invita a la acción.",
      "etiquetas": ['Premium Design','Landing Page','UX Intuitivo','Full Custom','Responsive Layout'],
      "imagenUrl": '/img/portafolio/portafolio1.webp',
      "tema": 'negro'
    },
        {
      "id": 2,
      "titulo": "Diseño Minimalista con Carácter",
      "descripcion": "Página construida alrededor del equilibrio entre simplicidad y expresión. El espacio en blanco enfatiza cada elemento clave mientras la jerarquía visual guía al usuario sin esfuerzo.",
      "etiquetas": ['Minimal UI','Clean Grid','Adaptive Design','Modern Typography','High Readability'],
      "imagenUrl": '/img/portafolio/portafolio2.webp',
      "tema": 'morado'
    },

  ]);

  proyectosDestacados = computed(() => {
    const desde = this.InicioIndicesIds;
    const hasta = this.FinalIndicesIds;
    return this.proyectos().slice(desde, hasta);
  })
  
}
