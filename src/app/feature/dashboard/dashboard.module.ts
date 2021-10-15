import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard.component';
import { CoreModule } from 'src/app/core/core.module';
import { MateriaModule } from './components/materia/materia.module';


@NgModule({
  declarations: [
    InicioComponent,
    DashboardComponent
  ],
  imports: [
    DashboardRoutingModule,
    MateriaModule,
    CoreModule
  ]
})
export class DashboardModule { }
