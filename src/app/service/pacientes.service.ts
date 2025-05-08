import axios from 'axios';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PacientesService {
  private readonly baseUrl = 'https://hermesproyect.fly.dev/pacientes/';

  async obtenerPacientes(skip: number = 0, limit: number = 10, filtro: string = '') {
    try {
      const params = {
        skip,
        limit,
        search: filtro
      };
      const respuesta = await axios.get(this.baseUrl, { params });
      return respuesta.data;
    } catch (error) {
      console.error('Error al obtener pacientes:', error);
      throw error;
    }
  }
}
