import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { Relatorio } from 'src/app/model/relatorio';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {
  // relatorio: Relatorio[] = [{ data: '07/01/2023', hora: '13:02:57', origem: '5581999999999', destino: '5581888888888', situacao: 'Atendida', duracao: '00:00:04', protocolo: '1673107377.43099' }];
  // private readonly API = 'http://localhost:3000/values';
  private readonly API = '/api/relatorio';
  constructor(private httpClient: HttpClient) { }

  getRelatorio() {
    return this.httpClient.get<Relatorio[]>(this.API).pipe(
      // delay(2000),
      // se inscreve no observable e assim que receber a primeira resposta se desincreve do observable
      //  first() 
    );
  }
}
