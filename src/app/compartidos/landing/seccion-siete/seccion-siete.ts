import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-seccion-siete',
  imports: [RouterLink],
  templateUrl: './seccion-siete.html',
  styleUrl: './seccion-siete.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeccionSiete {

  protected readonly assetsPath = environment.assetsUrl;
}
