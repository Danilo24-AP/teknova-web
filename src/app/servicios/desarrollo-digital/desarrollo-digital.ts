import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-desarrollo-digital',
  imports: [RouterLink],
  templateUrl: './desarrollo-digital.html',
  styleUrl: './desarrollo-digital.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesarrolloDigital {

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
