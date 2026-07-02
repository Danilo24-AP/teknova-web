import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-seccion-seis',
  imports: [],
  templateUrl: './seccion-seis.html',
  styleUrl: './seccion-seis.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeccionSeis {

  protected readonly assetsPath = environment.assetsUrl;

  seccionAnimada = viewChild.required<ElementRef>('seccionAnimada')

  constructor(){
    afterNextRender(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(this.seccionAnimada().nativeElement, 
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          clearProps: "all",
          scrollTrigger: {
            trigger: this.seccionAnimada().nativeElement,
            start: 'top 85%',
            end: 'bottom top'
          }
        }
      );
    });
  }
}
