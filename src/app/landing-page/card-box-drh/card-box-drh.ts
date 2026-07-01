import { afterNextRender, ChangeDetectionStrategy, Component, inject, NgZone, OnDestroy } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-card-box-drh',
  imports: [],
  templateUrl: './card-box-drh.html',
  styleUrl: './card-box-drh.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardBoxDrh implements OnDestroy{

  private ngZone = inject(NgZone);
  private context!: gsap.Context;
  
  constructor() {
    afterNextRender(() => {
      this.ngZone.runOutsideAngular(() => {
        gsap.registerPlugin(ScrollTrigger);
      
        this.animacionScrollPortada();
      })
    })
  }

  private animacionScrollPortada(): void{

    this.context = gsap.context(() => {

      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // Estado normal: Cuadros en su sitio (al centro)
        gsap.set('.box-enter-drh', { opacity: 1, scale: 1});

        gsap.from('.box-enter-drh', 
          //Estado
          {
            opacity: 0,
            scale: 0.2,
            x: 350,
            y: 0,
            duration: 1.2,
            stagger: 0.45,  // Efecto uno por uno
            ease: "back.out(1.5)"
          },
        );

        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#page-wrapper",
            start: "top top",
            end: "600px top",
            scrub: true, // Suavizado al subir/bajar rápido
          },
        });

        scrollTl.to('.box-right-up', {
            x: 250,
            opacity: 0,
            scale: 0.4,
            rotation: -65,
            ease: "none",
            overwrite: "auto"
        }, 0);
        scrollTl.to('.box-right-middle', {
            x: 350,
            opacity: 0,
            scale: 0.4,
            rotation: -45,
            ease: "none",
            overwrite: "auto"
        }, 0);
        scrollTl.to('.box-right-low', {
            x: 350,
            opacity: 0,
            scale: 0.4,
            rotation: 60,
            ease: "none",
            overwrite: "auto"
        }, 0);
      });
      
    });
  }
  
  ngOnDestroy(): void {
    if(this.context){
      this.context.revert();
    }
  }
}
