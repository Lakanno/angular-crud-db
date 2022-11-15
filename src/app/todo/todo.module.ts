import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { DummyService } from '../posts/services/dummy.service';



@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoComponent
  ],
  providers: [
    DummyService
  ]
  
})
export class TodoModule { }
