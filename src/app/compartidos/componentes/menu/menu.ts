import { ChangeDetectionStrategy, Component, HostListener, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownMenu } from "./dropdown-menu/dropdown-menu";
import { ContenidoDownPortafolio } from './contenido-down-portafolio/contenido-down-portafolio';
import { ContenidoDownServicios } from "./contenido-down-servicios/contenido-down-servicios";

@Component({
  selector: 'app-menu',
  imports: [RouterLink, DropdownMenu, ContenidoDownPortafolio, ContenidoDownServicios],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Nueva forma de escuchar el scroll sin @HostListener
  host: {
    '(window:scroll)': 'onWindowScroll()'
  }
})
export class Menu{

  isHidden = signal<boolean>(false);
  isMobileMenuOpen = signal<boolean>(false);
  private lastScrollTop = 0;
  
  // Estado centralizado. Si abres uno, el otro se cierra automáticamente.
  dropdownActivo = signal<string | null>(null);

  get isMouse() {
    return typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;
  }

  // --- LOGICA DE DROPDOWNS ---
  onMouseEnterDropdown(menu: string) {
    if (this.isMouse) {
      this.dropdownActivo.set(menu);
    }
  }

  onMouseLeaveDropdown() {
    if (this.isMouse) {
      this.dropdownActivo.set(null);
    }
  }

  onClickDropdown(menu: string, event: Event) {
    event.stopPropagation(); // Evita que el clic llegue al document
    
    // Si tocan el mismo que ya está abierto, lo cierra. Si tocan otro, lo abre.
    this.dropdownActivo.update(current => current === menu ? null : menu);
  }

  // Si hacen clic en cualquier parte vacia de la pagina, cerramos los dropdowns
  @HostListener('document:click')
  onDocumentClick() {
    this.dropdownActivo.set(null);
  }

  onWindowScroll(): void {

    if (this.isMobileMenuOpen()) {
      return; 
    }

    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Si bajamos mas de 50px, ocultamos el menu
    if (scrollTop > this.lastScrollTop && scrollTop > 50) {
      this.isHidden.set(true);
      this.isMobileMenuOpen.set(false); // Cerramos el menu movil al hacer scroll
    }
    // Si subimos, lo mostramos
    else if (scrollTop < this.lastScrollTop) {
      this.isHidden.set(false);
    }

    // Evitamos valores negativos
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  // Funcion para alternar el menu movil
  toggleMenuMovil(): void {
    this.isMobileMenuOpen.update(estado => {
      const newState = !estado;

      if(newState){
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden')
      }

      if(!newState){
        document.body.classList.remove
      }

      return newState
    });
  }

  // Cierre seguro
  cerrarMenuMovil(): void {
    // Solo hacemos algo si el menu esta abierto
    if (this.isMobileMenuOpen()) {
      this.isMobileMenuOpen.set(false); // Lo forzamos a falso
      document.body.classList.remove('overflow-hidden'); // Desbloqueamos el scroll
    }
  }
}
