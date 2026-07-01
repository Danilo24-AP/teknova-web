import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-seccion-background',
  imports: [NgOptimizedImage],
  templateUrl: './seccion-background.html',
  styleUrl: './seccion-background.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionBackground {

}
