import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-soporte-tecnico',
  imports: [],
  templateUrl: './soporte-tecnico.html',
  styleUrl: './soporte-tecnico.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SoporteTecnico {

  protected readonly assetsPath = environment.assetsUrl;
  private seccionAnimada = viewChild.required<ElementRef>('seccionAnimada');

  constructor(){
    afterNextRender(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(this.seccionAnimada().nativeElement, 
        {
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: this.seccionAnimada().nativeElement,
            start: 'top 85%',
          }
        });
    });
  }
}
