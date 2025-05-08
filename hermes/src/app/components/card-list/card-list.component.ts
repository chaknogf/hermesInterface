import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PacientesService } from '../../service/pacientes.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class CardListComponent implements OnInit {

  constructor() {
    service: PacientesService
  }

  terminoBusqueda: string = '';

  elementos: any[] = [];

  ngOnInit() {
  }

  get elementosFiltrados() {
    return this.elementos.filter(elemento => elemento.name.toLowerCase().includes(this.terminoBusqueda.toLowerCase()));
  }




}
