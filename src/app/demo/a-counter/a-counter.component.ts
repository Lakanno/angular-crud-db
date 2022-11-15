import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-a-counter',
  templateUrl: './a-counter.component.html',
  styleUrls: ['./a-counter.component.css'],
  providers: [CounterService]
})
export class ACounterComponent implements OnInit {
  count$ = this.counterService.count$;

  constructor(private counterService: CounterService) {
    console.log('Created Component A');
    
   }

  ngOnInit(): void {
  }

  increment(){
    this.counterService.increment()
  }

  decrement(){
    this.counterService.decrement()
  }
}
