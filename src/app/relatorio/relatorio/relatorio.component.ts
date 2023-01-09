import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { Relatorio } from 'src/app/model/relatorio';
import { ErroDialogComponent } from 'src/app/shared/components/erro-dialog/erro-dialog.component';
import { RelatorioService } from '../services/relatorio.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent {
  // dataSource: Relatorio[] = [{ data: '07/01/2023', hora: '13:02:57', origem: '5581999999999', destino: '5581888888888', situacao: 'Atendida', duracao: '00:00:04', protocolo: '1673107377.43099' }];
  dataSource$: Observable<Relatorio[]>;
  displayedColumns = ['data', 'hora', 'origem', 'destino', 'situacao', 'duracao', 'protocolo'];

  constructor(private relatorioService: RelatorioService, public dialog: MatDialog) {
    this.dataSource$ = this.relatorioService.getRelatorio().pipe(
      catchError(error => {
        console.log(error)
        this.openDialog('Erro ao carregar recursos.')
        return of([])
      })
    );
  }

  openDialog(errorMsg: string) {
    this.dialog.open(ErroDialogComponent, {
      data: errorMsg,
    });
  }

}
