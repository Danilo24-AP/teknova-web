import { ChangeDetectionStrategy, Component, computed, ElementRef, HostListener, inject, Input, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  imports: [],
  templateUrl: './dropdown-menu.html',
  styleUrl: './dropdown-menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenu {
  
  @Input({required:true})
  titulo!: string;

  isOpen = input.required<boolean>();

  clickBtn = output<Event>();

  onclick(event: Event){
    this.clickBtn.emit(event);
  }
}
