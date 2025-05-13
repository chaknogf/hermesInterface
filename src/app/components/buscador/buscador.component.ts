import { Component } from '@angular/core';
import { BuscadorService } from '../../service/buscador.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NodosPipe } from '../../pipes/nodos.pipe';
import { NotificacionComponent } from '../notificacion/notificacion.component';
import { EnviadoLoaderComponent } from "../enviado-loader/enviado-loader.component";


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, NodosPipe, NotificacionComponent, EnviadoLoaderComponent]
})
export class BuscadorComponent {
  nombre = '';
  cui = '';
  cargando = false;
  resultados: any[] = [];
  itemActivo: any = null;
  notificacion = false;

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
      this.notificacion = true;
    }, 4000);

  }

  estaActivo(item: any): boolean {
    return this.itemActivo === item;
  }
}
