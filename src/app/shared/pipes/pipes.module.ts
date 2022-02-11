import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitWrapPipe } from './split-wrap/split-wrap.pipe';



@NgModule({
  declarations: [
    SplitWrapPipe
  ],
  exports: [
    SplitWrapPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
