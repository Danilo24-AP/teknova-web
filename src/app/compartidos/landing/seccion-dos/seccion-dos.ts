import { NgOptimizedImage } from '@angular/common';
import { Component, OnDestroy, ElementRef, ViewChild, afterNextRender, signal, ChangeDetectionStrategy, inject } from '@angular/core';
import { Splide } from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

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
  imports: [NgOptimizedImage],
  templateUrl: './seccion-dos.html',
  styleUrl: './seccion-dos.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeccionDos implements OnDestroy{

  proyectos = signal<ProyectoSlide[]>([
    {
      id: 1, 
      imagenUrl: 'assets/img/websites-img/img-porft-1.jpg',
      etiqueta: 'Landing page',
      texto: 'We don\'t call them "customers" or transactions.',
      variante: 'estandar'
    },
    {
      id: 2, 
      imagenUrl: 'assets/img/websites-img/img-porft-5.jpg',
      etiqueta: 'E-commerce',
      texto: 'We don\'t call them "customers" or transactions.',
      variante: 'alto'
    },
    {
      id: 3, 
      imagenUrl: 'assets/img/websites-img/img-porft-2.jpg',
      etiqueta: 'Landing page',
      texto: "We don't call them 'customers' or transactions. They are your supporters.",
      variante: 'ancho'
    },

    {
      id: 4, 
      imagenUrl: 'assets/img/websites-img/img-porft-6.jpg',
      etiqueta: 'Landing page',
      texto: 'We don\'t call them "customers" or transactions.',
      variante: 'estandar'
    },

    {
      id: 5, 
      imagenUrl: 'assets/img/websites-img/img-porft-3.png',
      etiqueta: 'Landing page',
      texto: "We don't call them 'customers' or transactions. They are your supporters.",
      variante: 'ancho'
    },

    {
      id: 6, 
      imagenUrl: 'assets/img/websites-img/img-porft-7.jpg',
      etiqueta: 'E-commerce',
      texto: 'We don\'t call them "customers" or transactions.',
      variante: 'alto'
    },

    {
      id: 7, 
      imagenUrl: 'assets/img/websites-img/img-porft-8.png',
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
          gap: '70px', // Tu espacio original de 70px en computadores
        },
        1200:{
          gap: '70px', // Mantén el mismo espacio en pantallas grandes
        }
      },
      // CONFIGURACIÓN CLAVE: Aquí controlamos el flujo continuo sin fallos
      autoScroll: {
        speed: 0.5,        // Velocidad constante del carrusel (más alto = más rápido)
        pauseOnHover: true,// PAUSA INSTANTÁNEA al poner el cursor (sin retrasos)
        pauseOnFocus: false,
      },
    });

    // Inicializamos pasando explícitamente la extensión de AutoScroll
    this.instanciaSplide.mount({ AutoScroll });
  }

  ngOnDestroy(): void {
    if (this.instanciaSplide) {
      this.instanciaSplide.destroy();
    }
  }
  
}
