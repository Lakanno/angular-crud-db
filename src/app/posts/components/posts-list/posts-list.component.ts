import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPost } from '../../models/posts.interface';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
@Input() posts: IPost[] = [];
@Output() edit = new EventEmitter<number>();
@Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
