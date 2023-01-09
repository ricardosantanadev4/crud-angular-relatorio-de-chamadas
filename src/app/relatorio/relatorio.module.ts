import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatorioRoutingModule } from './relatorio-routing.module';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RelatorioComponent
  ],
  imports: [
    CommonModule,
    RelatorioRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class RelatorioModule { }
