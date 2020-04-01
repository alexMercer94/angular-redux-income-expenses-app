import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DetalleComponent } from '../ingreso-egreso/detalle/detalle.component';
import { EstadisticaComponent } from '../ingreso-egreso/estadistica/estadistica.component';
import { IngresoEgresoComponent } from '../ingreso-egreso/ingreso-egreso.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    EstadisticaComponent,
    IngresoEgresoComponent,
    DetalleComponent
  ],
  imports: [CommonModule, DashboardRoutingModule]
})
export class DashboardModule {}
