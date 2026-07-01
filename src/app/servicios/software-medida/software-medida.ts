import { NgOptimizedImage } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-software-medida',
  imports: [NgOptimizedImage],
  templateUrl: './software-medida.html',
  styleUrl: './software-medida.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SoftwareMedida {
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
