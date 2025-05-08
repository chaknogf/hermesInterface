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

  constructor(private buscadorService: BuscadorService) { }

  async buscar() {
    this.cargando = true;
    this.resultados = [];

    setTimeout(async () => {
      try {
        this.resultados = await this.buscadorService.buscarEnNodos(this.nombre, this.cui);
      } catch (error) {
        console.error('Error durante la búsqueda:', error);
      } finally {
        this.cargando = false;
      }
    }, 2000);
  }
}
