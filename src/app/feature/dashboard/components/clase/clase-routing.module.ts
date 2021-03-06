import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaseComponent } from './clase/clase.component';
import { CrearClaseComponent } from './crear-clase/crear-clase.component';
import { ListarClaseComponent } from './listar-clase/listar-clase.component';

const routes: Routes = [
  {
    path: '',
    component: ClaseComponent,
    children: [
      {
        path: 'crear',
        component: CrearClaseComponent
      },
      {
        path: 'listar',
        component: ListarClaseComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaseRoutingModule { }
