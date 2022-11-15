import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageNotifierComponent } from './components/language-notifier/language-notifier.component';



@NgModule({
  declarations: [
    LanguageNotifierComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LanguageNotifierComponent
  ]
})
export class SharedModule { }
