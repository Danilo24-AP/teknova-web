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

  // Obtenemos la referencia del elemento HTML que animaremos
  @ViewChild('fraseAnimada', {static: true}) fraseAnimada!: ElementRef<HTMLSpanElement>;

  private frases: string[] = ['Innovación que acompaña.', 
  'Cercanos, confiables, efectivos.', 
  'Eficiencia segura.', 
  'Tu aliado tecnologico.',
  'Compromiso real.', 
  'Más que soporte, somos equipo.'];

  // Guardamos la referencia del timeline para poder destruirlo si el componente se desmonta
  private timeline!: gsap.core.Timeline;

  ngAfterViewInit(): void {
    this.initAnimacionEscritura();
  }

  initAnimacionEscritura(): void {
    // Creamos el timeline con repeat: -1 para que sea infinito
    this.timeline = gsap.timeline({repeat: -1});

    this.frases.forEach((frase) => {
      // 1. Animación de ESCRITURA
      this.timeline.to(this.fraseAnimada.nativeElement, {
        duration: frase.length * 0.06, // Velocidad dinámica según el largo de la frase
        text: frase,
        ease: 'none'
      })

      // 2. PAUSA (El tiempo que se queda la frase estática antes de borrarse)
      .to({}, {duration: 1})

      // 3. Animación de BORRADO (Hacia un string vacío)
      .to(this.fraseAnimada.nativeElement, {
        duration: frase.length * 0.03, // El borrado suele ser un poco más rápido
        text: '',
        ease: 'none'
      })

      // 4. PAUSA corta antes de empezar la siguiente frase
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
