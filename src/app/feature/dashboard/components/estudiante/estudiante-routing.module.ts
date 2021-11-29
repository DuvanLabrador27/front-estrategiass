import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEstudianteComponent } from './crear-estudiante/crear-estudiante.component';
import { ListarEstudianteComponent } from './listar-estudiante/listar-estudiante.component';

const routes: Routes = [
  {
    path: 'crear',
    component: CrearEstudianteComponent
  },
  {
    path: 'listar',
    component: ListarEstudianteComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class EstudianteRoutingModule { }
