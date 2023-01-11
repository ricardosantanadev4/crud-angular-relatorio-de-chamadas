import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErroDialogComponent } from './components/erro-dialog/erro-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { SituacaoPipe } from './pipes/situacao.pipe';



@NgModule({
  declarations: [
    ErroDialogComponent,
    SituacaoPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErroDialogComponent,
    SituacaoPipe
  ]
})
export class SharedModule { }
