import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class BuscadorService {
  public nodos = [
    '/assets/nodo1.json',
    'assets/nodo2.json',
    'assets/nodo3.json',
    'assets/nodo4.json',
  ];

  async buscarEnNodos(nombre: string, cui: string) {
    const resultados: any[] = [];

    for (const nodo of this.nodos) {
      try {
        const respuesta = await axios.get(nodo);
        const pacientes = respuesta.data;

        for (const paciente of pacientes) {
          const normalizar = (texto: string) =>
            texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

          const coincideNombre = nombre
            ? normalizar(paciente.nombre).includes(normalizar(nombre))
            : false;
          const coincideCui = cui ? paciente.cui === cui : false;

          if (coincideNombre || coincideCui) {
            resultados.push({
              nodo,
              paciente,
              consultas: paciente.consultas || [],
            });
          }

          if (!nombre && !cui) {
            console.warn("Debe ingresar al menos nombre o CUI para buscar.");
            return [];
          }
        }
      } catch (error) {
        console.error(`Error al leer ${nodo}`, error);
      }
    }

    return resultados;
  }
}
