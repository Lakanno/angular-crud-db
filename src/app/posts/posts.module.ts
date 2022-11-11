import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostsComponent } from './components/posts.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    PostsComponent,
    PostFormComponent,
    PostsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [PostsComponent]
})
export class PostsModule { }
