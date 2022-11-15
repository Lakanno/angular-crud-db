import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ACounterComponent } from './a-counter/a-counter.component';
import { BCounterComponent } from './b-counter/b-counter.component';



@NgModule({
  declarations: [
    ACounterComponent,
    BCounterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ACounterComponent,
    BCounterComponent
  ]
})
export class DemoModule { }
