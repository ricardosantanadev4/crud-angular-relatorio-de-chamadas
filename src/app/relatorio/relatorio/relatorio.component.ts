import { Component } from '@angular/core';
import { Relatorio } from 'src/app/model/relatorio';
import { RelatorioService } from '../services/relatorio.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent {
  // dataSource: Relatorio[] = [{ data: '07/01/2023', hora: '13:02:57', origem: '5581999999999', destino: '5581888888888', situacao: 'Atendida', duracao: '00:00:04', protocolo: '1673107377.43099' }];
  dataSource: Relatorio[] = [];
  displayedColumns = ['data', 'hora', 'origem', 'destino', 'situacao', 'duracao', 'protocolo'];

  constructor(private relatorioService: RelatorioService) {
    this.relatorioService.getRelatorio().subscribe(relatorio => this.dataSource = relatorio);
  }
}
