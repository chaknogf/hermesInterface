import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class NotificacionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
