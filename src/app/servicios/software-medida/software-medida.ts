import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-software-medida',
  imports: [],
  templateUrl: './software-medida.html',
  styleUrl: './software-medida.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SoftwareMedida {

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
