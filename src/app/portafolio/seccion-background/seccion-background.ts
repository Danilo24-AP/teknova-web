import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-seccion-background',
  imports: [],
  templateUrl: './seccion-background.html',
  styleUrl: './seccion-background.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionBackground {

  protected readonly assetsPath = environment.assetsUrl;
}
