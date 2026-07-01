import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer{

  titulo = input.required<string>();
  tituloDos = input.required<string>();
  rutaUno = input.required<string>();
  rutaDos = input.required<string>();

}
