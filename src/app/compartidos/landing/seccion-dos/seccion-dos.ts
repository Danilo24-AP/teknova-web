import { Component, OnDestroy, ElementRef, ViewChild, afterNextRender, signal, ChangeDetectionStrategy } from '@angular/core';
import { Splide } from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { environment } from '../../../../environments/environment';

export type varianteSlide = 'estandar' | 'alto' | 'ancho';

export interface ProyectoSlide{
  id: number,
  imagenUrl: string,
  etiqueta: string,
  texto: string,
  variante: varianteSlide
}


@Component({
  selector: 'app-seccion-dos',
  imports: [],
  templateUrl: './seccion-dos.html',
  styleUrl: './seccion-dos.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeccionDos implements OnDestroy{

  protected readonly assetsPath = environment.assetsUrl;

  proyectos = signal<ProyectoSlide[]>([
    {
      id: 1, 
      imagenUrl: '/img/websites-img/img-porft-1.webp',
      etiqueta: 'Landing page',
      texto: 'We don\'t call them "customers" or transactions.',
      variante: 'estandar'
    },
    {
      id: 2, 
      imagenUrl: '/img/websites-img/img-porft-5.webp',
      etiqueta: 'E-commerce',
      texto: 'We don\'t call them "customers" or transactions.',
      variante: 'alto'
    },
    {
      id: 3, 
      imagenUrl: '/img/websites-img/img-porft-2.webp',
      etiqueta: 'Landing page',
      texto: "We don't call them 'customers' or transactions. They are your supporters.",
      variante: 'ancho'
    },

    {
      id: 4, 
      imagenUrl: '/img/websites-img/img-porft-6.webp',
      etiqueta: 'Landing page',
      texto: 'We don\'t call them "customers" or transactions.',
      variante: 'estandar'
    },

    {
      id: 5, 
      imagenUrl: '/img/websites-img/img-porft-3.webp',
      etiqueta: 'Landing page',
      texto: "We don't call them 'customers' or transactions. They are your supporters.",
      variante: 'ancho'
    },

    {
      id: 6, 
      imagenUrl: '/img/websites-img/img-porft-7.webp',
      etiqueta: 'E-commerce',
      texto: 'We don\'t call them "customers" or transactions.',
      variante: 'alto'
    },

    {
      id: 7, 
      imagenUrl: '/img/websites-img/img-porft-8.webp',
      etiqueta: 'E-commerce',
      texto: "We don't call them 'customers' or transactions. They are your supporters.",
      variante: 'ancho'
    },
  ]);


  @ViewChild('carrusel') splideContainer!: ElementRef<HTMLElement>;
  private instanciaSplide: Splide | undefined;

  constructor(){

    afterNextRender(() => {
      this.initSplide();
    })
  }

  private initSplide(): void {
    
    this.instanciaSplide = new Splide(this.splideContainer.nativeElement, {
      type: 'loop',        // Bucle infinito continuo
      clones: 8,
      autoWidth: true,
      gap: '60px',         
      arrows: false,       // Oculta flechas
      pagination: false,   // Oculta puntos
      // direction: 'ltr', // <--- FORZA EL COMPORTAMIENTO HORIZONTAL ESTÁNDAR
      
      // RESPONSIVE: Ajustes nativos de comportamiento según pantalla
      breakpoints: {
        768: {
          gap: '70px', // Espacio original de 70px en computadores
        },
        1200:{
          gap: '70px',
        }
      },
      // flujo continuo
      autoScroll: {
        speed: 0.5,        // Velocidad constante del carrusel
        pauseOnHover: true,// PAUSA INSTANTANEA al poner el cursor
        pauseOnFocus: false,
      },
    });

    this.instanciaSplide.mount({ AutoScroll });
  }

  ngOnDestroy(): void {
    if (this.instanciaSplide) {
      this.instanciaSplide.destroy();
    }
  }
  
}
