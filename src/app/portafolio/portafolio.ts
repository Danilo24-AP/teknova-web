import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SeccionIlustraciones } from "./seccion-ilustraciones/seccion-ilustraciones";
import { SeccionBackground } from "./seccion-background/seccion-background";
import { Footer } from "../compartidos/componentes/footer/footer";
import { SeccionCarrusel } from "./seccion-carrusel/seccion-carrusel";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-portafolio',
  imports: [SeccionIlustraciones, SeccionBackground, Footer, SeccionCarrusel, RouterLink],
  templateUrl: './portafolio.html',
  styleUrl: './portafolio.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Portafolio {}
