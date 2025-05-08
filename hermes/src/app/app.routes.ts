import { Routes } from '@angular/router';
import { CardListComponent } from './components/card-list/card-list.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

export const routes: Routes = [
  {
    path: '',
    component: BuscadorComponent
  }
];
