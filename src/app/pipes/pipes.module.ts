import { NgModule } from '@angular/core';
import { FormatDatePipe } from './formatDate.pipe';
import { SummarizePipe } from './summarizer.pipe';

const pipes = [
  FormatDatePipe,
  SummarizePipe,
]

@NgModule({
  declarations: [
    ...pipes,
  ],
  exports: [
    ...pipes,
  ]
})

export class PipesModule { }
