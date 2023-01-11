import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'situacao'
})
export class SituacaoPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'Atendida': return 'call_received';
      case 'Não atendida': return 'call_missed';

    }
    return '';
  }

}
