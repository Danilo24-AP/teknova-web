import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seccion-siete',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './seccion-siete.html',
  styleUrl: './seccion-siete.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeccionSiete {}
