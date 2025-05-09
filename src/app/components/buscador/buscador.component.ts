import { Component } from '@angular/core';
import { BuscadorService } from '../../service/buscador.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NodosPipe } from '../../pipes/nodos.pipe';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, NodosPipe]
})
export class BuscadorComponent {
  nombre = '';
  cui = '';
  cargando = false;
  resultados: any[] = [];
  itemActivo: any = null;

  constructor(private buscadorService: BuscadorService) { }

  async buscar() {
    this.cargando = true;
    this.resultados = [];

    setTimeout(async () => {
      try {
        this.resultados = await this.buscadorService.buscarEnNodos(this.nombre, this.cui);
        // Inicializa propiedades para control visual en cada item
        this.resultados.forEach(item => {
          item.mostrandoTextbox = false;
          item.solicitudRealizada = false;
          item.notificacionPendiente = false;
          item.mensaje = '';  // Para el textarea
        });
      } catch (error) {
        console.error('Error durante la búsqueda:', error);
      } finally {
        this.cargando = false;
      }
    }, 2000);
  }


  abrirTextbox(item: any): void {
    this.itemActivo = item === this.itemActivo ? null : item;
  }

  enviarSolicitud(item: any): void {
    item.solicitudRealizada = true;
    item.notificacionPendiente = true;
    this.itemActivo = null; // cerrar el textbox
    console.log('Solicitud enviada:', item);

    setTimeout(() => {
      item.notificacionPendiente = false;
    }, 5000);
  }

  estaActivo(item: any): boolean {
    return this.itemActivo === item;
  }
}
