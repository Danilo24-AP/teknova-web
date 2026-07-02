import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-contenido-down-servicios',
  imports: [RouterLink],
  templateUrl: './contenido-down-servicios.html',
  styleUrl: './contenido-down-servicios.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContenidoDownServicios {

  protected readonly assetsPath = environment.assetsUrl;
}
