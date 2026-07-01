import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Footer } from '../compartidos/componentes/footer/footer';

@Component({
  selector: 'app-contacto',
  imports: [Footer],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Contacto {}
