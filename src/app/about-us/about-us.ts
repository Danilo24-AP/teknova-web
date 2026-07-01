import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { Footer } from '../compartidos/componentes/footer/footer';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { NgOptimizedImage } from '@angular/common';

gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-about-us',
  imports: [Footer, NgOptimizedImage],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutUs implements AfterViewInit {

  
  @ViewChild('fraseAnimada', {static: true}) fraseAnimada!: ElementRef<HTMLSpanElement>;

  private frases: string[] = ['Innovación que acompaña.', 
  'Cercanos, confiables, efectivos.', 
  'Eficiencia segura.', 
  'Tu aliado tecnologico.',
  'Compromiso real.', 
  'Más que soporte, somos equipo.'];

  private timeline!: gsap.core.Timeline;

  ngAfterViewInit(): void {
    this.initAnimacionEscritura();
  }

  initAnimacionEscritura(): void {
    // Timeline con repeat: -1 para que sea infinito
    this.timeline = gsap.timeline({repeat: -1});

    this.frases.forEach((frase) => {
      // Animación de ESCRITURA
      this.timeline.to(this.fraseAnimada.nativeElement, {
        duration: frase.length * 0.06,
        text: frase,
        ease: 'none'
      })

      // Tiempo que se queda la frase estática antes de borrarse
      .to({}, {duration: 1})

      // Animación de BORRADO
      .to(this.fraseAnimada.nativeElement, {
        duration: frase.length * 0.03,
        text: '',
        ease: 'none'
      })

      // PAUSA, otra vez.
      .to({}, {duration: 1})
    })
  }

  ngOnDestroy(): void {
    // Si el timeline existe, lo destruimos para evitar que siga corriendo en segundo plano
    if(this.timeline){
      this.timeline.kill();
    }
  }


}
