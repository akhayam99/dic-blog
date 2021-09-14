import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summarize'
})

export class SummarizePipe implements PipeTransform {
  transform(value: string, chars: number = 500): string {
    if (value.length < chars)
      return value;
    return value.substring(0, chars) + '...';
  }
}
