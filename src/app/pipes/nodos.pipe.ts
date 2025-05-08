import { Pipe, PipeTransform } from '@angular/core';
import { HOSPITALES_DATA } from '../enums/enum'; // Ajuste el path según ubicación real

@Pipe({
  name: 'nodos',
  standalone: true
})
export class NodosPipe implements PipeTransform {

  transform(nodoPath: string): string {
    const hospital = HOSPITALES_DATA.find(h => h.nodo === nodoPath);
    return hospital ? hospital.nombre : 'Nodo desconocido';
  }

}
