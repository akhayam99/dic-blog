import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatDate'
})

export class FormatDatePipe implements PipeTransform {
  transform(value: string, destinationFormat = 'DD/MM/YYYY HH:mm'): string {
    return moment(value, 'YYYY-MM-DD HH:mm').format(destinationFormat);
  }
}
