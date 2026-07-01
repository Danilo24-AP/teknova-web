import { NgOptimizedImage } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, inject, viewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-seccion-tres',
  imports: [MatIconModule, NgOptimizedImage],
  templateUrl: './seccion-tres.html',
  styleUrl: './seccion-tres.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeccionTres {

  seccionAnimada = viewChild.required<ElementRef>('seccionAnimada');

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
