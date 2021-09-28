import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summarize'
})

export class SummarizePipe implements PipeTransform {
  transform(value: string, chars: number = 500): string {
    return value.length < chars
      ? value
      : `${value.substring(0, chars)}...`;
  }
}
