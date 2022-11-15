import { Component, OnInit } from '@angular/core';
import { DummyService } from '../posts/services/dummy.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private dummyService: DummyService) { }

  ngOnInit(): void {
    console.log(this.dummyService.sayHello())
  }

}
