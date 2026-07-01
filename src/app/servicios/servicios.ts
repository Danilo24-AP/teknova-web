import { afterNextRender, ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Footer } from "../compartidos/componentes/footer/footer";
import { ActivatedRoute, Router } from '@angular/router';
import { DesarrolloDigital } from "./desarrollo-digital/desarrollo-digital";
import { SoporteTecnico } from "./soporte-tecnico/soporte-tecnico";
import { SistemasCctv } from "./sistemas-cctv/sistemas-cctv";
import { SoftwareMedida } from "./software-medida/software-medida";
import { ViewportScroller } from '@angular/common';

export type TipoSeccion = 'todo' | 'digital' | 'soporte' | 'cctv' | 'software';

@Component({
  selector: 'app-servicios',
  imports: [Footer, DesarrolloDigital, SoporteTecnico, SistemasCctv, SoftwareMedida],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Servicios {

  seccionActiva = signal<TipoSeccion>('todo');
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private viewPortScroll = inject(ViewportScroller)

  private mapFragments: Record<string, TipoSeccion> = {
    'desarrollo-digital': 'digital',
    'soporte-tecnico': 'soporte',
    'sistemas-cctv': 'cctv',
    'software-medida': 'software'
  };

  constructor() {
    afterNextRender(() => {
      this.route.fragment.subscribe(fragment => {

        if(fragment){

          const seccionCorrespondiente = this.mapFragments[fragment];

          if(seccionCorrespondiente){
            this.seccionActiva.set(seccionCorrespondiente);
          }
          
          setTimeout(() => {
            this.viewPortScroll.scrollToAnchor(fragment);
          }, 150);

        } else {
          this.seccionActiva.set('todo');
          this.viewPortScroll.scrollToPosition([0, 0]);
        }

      });
    });
  }

  cambiarSeccion(nuevaSeccion: TipoSeccion): void {

    this.seccionActiva.set(nuevaSeccion);

    const mapIds: Record<Exclude<TipoSeccion, 'todo'>, string> = {
      digital: 'desarrollo-digital',
      soporte: 'soporte-tecnico',
      cctv: 'sistemas-cctv',
      software: 'software-medida'
    };

    if(nuevaSeccion !== 'todo'){
      const targetId = mapIds[nuevaSeccion];

      setTimeout(() => {
        this.router.navigate([], {fragment: targetId});
      }, 200);
    }else{
      this.router.navigate([], {fragment: undefined});
    }
  }
}
