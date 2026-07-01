import { NgOptimizedImage } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-desarrollo-digital',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './desarrollo-digital.html',
  styleUrl: './desarrollo-digital.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesarrolloDigital {
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
