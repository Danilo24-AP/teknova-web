import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from "../compartidos/componentes/footer/footer";

@Component({
  selector: 'app-faq',
  imports: [RouterLink, Footer],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Faq {
  
  preguntaActiva = signal<number | null>(null);

  //Alternar el estado del menú desplegable
  toggle(id: number){
    this.preguntaActiva.update(current => current === id ? null : id);
  }


  panel = [
    {
      id: 1,
      titulo: '¿Qué servicios ofrece TekNovaIng?',
      contenido: 'Ofrecemos instalación y soporte de cámaras de seguridad, desarrollo web, reparación de computadoras, mantenimiento de impresoras y asesoría tecnológica.',
    },
    {
      id: 2,
      titulo: '¿Instalan cámaras en hogares, empresas o ambos?',
      contenido: 'Sí, trabajamos tanto en hogares como en negocios, locales comerciales, oficinas y fincas. Adaptamos cada instalación a las necesidades del cliente.',
    },
        
    {
      id: 3,
      titulo: '¿Cuál es el tiempo de instalación de un sistema de cámaras?',
      contenido: 'Depende del número de cámaras y el tipo de instalación, pero la mayoría de los proyectos se completan entre 1 y 2 días.',
    },    
    {
      id: 4,
      titulo: '¿Brindan soporte o mantenimiento después de la instalación?',
      contenido: 'Sí, contamos con soporte técnico y mantenimiento preventivo y correctivo para asegurar que tus cámaras funcionen siempre correctamente.',
    },    
    {
      id: 5,
      titulo: '¿Qué marcas de cámaras utilizan?',
      contenido: 'Trabajamos con marcas reconocidas por su calidad y garantía. Seleccionamos equipos confiables que se ajustan a tu presupuesto.',
    },    
    {
      id: 6,
      titulo: '¿Cómo sé qué tipo de cámaras necesito para mi propiedad?',
      contenido: 'En TeKnovaing realizamos una evaluación del espacio y te recomendamos el sistema ideal según iluminación, tamaño del área y nivel de seguridad requerido.',
    },    
    {
      id: 7,
      titulo: '¿Trabajan con cámaras inalámbricas o solo cableadas?',
      contenido: 'Instalamos ambos tipos. Recomendamos la mejor opción según la estabilidad de tu red, la distancia y la calidad de video que necesites.',
    },    
    {
      id: 8,
      titulo: '¿Cuánto tarda la creación de una página web?',
      contenido: 'El tiempo varía según el tipo de página, pero normalmente un sitio web estándar se entrega entre 30 y 65 días.',
    },    
    {
      id: 9,
      titulo: '¿TeKnovaing desarrolla páginas web personalizadas?',
      contenido: 'Sí, creamos páginas web a la medida: corporativas, tiendas online, portafolios, landing pages y más, según lo que tu proyecto necesite.',
    },    
    {
      id: 10,
      titulo: '¿Mi página será compatible con celulares y tablets? ',
      contenido: 'Sí, todos nuestros sitios son responsive, lo que significa que se adaptan a cualquier pantalla.',
    },    
    {
      id: 11,
      titulo: '¿Ofrecen mantenimiento y actualizaciones después de entregar la web?',
      contenido: 'Sí, contamos con planes de mantenimiento mensual o por evento para actualizar plugin, corregir errores, mejorar velocidad y mantener tu sitio seguro.',
    },    
    {
      id: 12,
      titulo: '¿Pueden integrar mi página con redes sociales o WhatsApp?',
      contenido: 'Claro. Integramos WhatsApp, Facebook, Instagram, Google Maps, chat en vivo y más herramientas según tus necesidades.',
    },
    {
      id: 13,
      titulo: '¿Pueden mejorar o rediseñar una página web existente?',
      contenido: 'Sí, podemos modernizar tu sitio, mejorar su estética, funcionalidad, velocidad o migrarlo a una plataforma más actual.',
    },
  ]
}
