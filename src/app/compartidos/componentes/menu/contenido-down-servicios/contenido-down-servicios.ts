import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contenido-down-servicios',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './contenido-down-servicios.html',
  styleUrl: './contenido-down-servicios.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContenidoDownServicios {}
