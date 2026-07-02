import { afterNextRender, ChangeDetectionStrategy, Component, inject, NgZone, OnDestroy } from '@angular/core';
import { Footer } from "../compartidos/componentes/footer/footer";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { RouterLink } from "@angular/router";
import { SeccionUno } from "../compartidos/landing/seccion-uno/seccion-uno";
import { SeccionDos } from "../compartidos/landing/seccion-dos/seccion-dos";
import { SeccionTres } from "../compartidos/landing/seccion-tres/seccion-tres";
import { SeccionCuatro } from "../compartidos/landing/seccion-cuatro/seccion-cuatro";
import { SeccionSeis } from "../compartidos/landing/seccion-seis/seccion-seis";
import { SeccionSiete } from '../compartidos/landing/seccion-siete/seccion-siete';
import { CardBoxDrh } from "./card-box-drh/card-box-drh";
import { CardBoxIzq } from "./card-box-izq/card-box-izq";
import { SkeletonCardCarrusel } from '../compartidos/componentes/skeleton-card-carrusel/skeleton-card-carrusel';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink, SeccionUno, SeccionDos, SkeletonCardCarrusel, SeccionTres, SeccionCuatro, SeccionSeis, SeccionSiete, Footer, CardBoxDrh, CardBoxIzq, SkeletonCardCarrusel],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPage implements OnDestroy {

  private ngZone = inject(NgZone);
  private context!: gsap.Context;

  constructor() {
    afterNextRender(() => {
      this.ngZone.runOutsideAngular(() => {
        gsap.registerPlugin(ScrollTrigger);
        this.AnimacionScrollPortada();

      });
    });
  }


  AnimacionScrollPortada(): void{

    this.context = gsap.context(() => {

      gsap.set('#page-wrapper', { backgroundColor: '#ffffff' });

      // Cambio de color de fondo. Contenedor principal
      gsap.to('#page-wrapper', {
        backgroundColor: '#E5E5E5',
        ease: "none",
        overwrite: "auto",
        scrollTrigger: {
          trigger: "#page-wrapper",
          start: "top top",
          end: "500px top",
          scrub: 1,
        }
      });

    });
    
  }
  
  ngOnDestroy(): void {
    if(this.context){
      this.context.revert()
    }
  }
}