import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';
import { LayoutModule } from './layout/layout.module';
import { PostsModule } from './posts/posts.module';
import { RequestLoggerService } from './shared/interceptors/request-logger.service';
import { SharedModule } from './shared/shared.module';
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    PostsModule,
    FormsModule,
    ReactiveFormsModule,
    TodoModule,
    LayoutModule,
    SharedModule,
    DemoModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: RequestLoggerService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
