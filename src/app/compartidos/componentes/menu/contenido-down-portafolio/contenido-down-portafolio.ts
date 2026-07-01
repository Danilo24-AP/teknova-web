import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-contenido-down-portafolio',
  imports: [RouterLink],
  templateUrl: './contenido-down-portafolio.html',
  styleUrl: './contenido-down-portafolio.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContenidoDownPortafolio {}
