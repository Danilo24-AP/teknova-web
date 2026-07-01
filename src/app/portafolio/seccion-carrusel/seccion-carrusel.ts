import { NgOptimizedImage } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, signal, viewChild } from '@angular/core';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export type varianteSlide = 'estandar' | 'alto' | 'ancho';

export interface ProyectoSlide{
  id: number,
  imagenUrl: string,
  texto: string,
  variante: varianteSlide
}


@Component({
  selector: 'app-seccion-carrusel',
  imports: [NgOptimizedImage],
  templateUrl: './seccion-carrusel.html',
  styleUrl: './seccion-carrusel.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeccionCarrusel implements OnDestroy{

  proyectos = signal<ProyectoSlide[]>([
    {
      id: 1, 
      imagenUrl: 'assets/img/websites-img/img-porft-1.jpg', 
      texto: 'We don\'t call them "customers" or transactions.',
      variante: 'estandar'
    },
    {
      id: 2, 
      imagenUrl: 'assets/img/websites-img/img-porft-5.jpg', 
      texto: 'We don\'t call them "customers" or transactions.',
      variante: 'alto'
    },
    {
      id: 3, 
      imagenUrl: 'assets/img/websites-img/img-porft-2.jpg', 
      texto: "We don't call them 'customers' or transactions. They are your supporters.",
      variante: 'ancho'
    },

    {
      id: 4, 
      imagenUrl: 'assets/img/websites-img/img-porft-4.jpg', 
      texto: "We don't call them 'customers' or transactions. They are your supporters.",
      variante: 'alto'
    },

    {
      id: 5, 
      imagenUrl: 'assets/img/websites-img/img-porft-3.png', 
      texto: "We don't call them 'customers' or transactions. They are your supporters.",
      variante: 'ancho'
    },
  ]);


  carruselRef = viewChild.required<ElementRef<HTMLElement>>('carrusel');

  private instanciaSplide: Splide | undefined;

  constructor(){
    afterNextRender(() => {
      this.inicializarSplide();
    })
  }

  private inicializarSplide(): void {
    const elemento = this.carruselRef().nativeElement;

    this.instanciaSplide = new Splide(elemento, {
      type: 'loop',
      clones: 10,
      autoWidth: true,
      gap: '2rem',
      pagination: false,
      arrows: false,
      breakpoints: {
        1024: {
          gap: '2rem'
        },
        768: {
          gap: '3rem'
        },
      },
      
      autoScroll: {
        speed: 0.5,        
        pauseOnHover: true,
        pauseOnFocus: false,
      },
    });

    this.instanciaSplide.mount({AutoScroll});
  }

  ngOnDestroy(): void {
    if (this.instanciaSplide) {
      this.instanciaSplide.destroy();
    }
  }
}
