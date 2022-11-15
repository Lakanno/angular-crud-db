import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable(
  
//   {
//   providedIn: 'root'
// }

)
export class CounterService {
  private countSubject$ = new BehaviorSubject(0);
  public count$ = this.countSubject$.asObservable()

  constructor() { 
    console.log('Created CounterService');
  }

  increment(){
    this.countSubject$.next(this.countSubject$.value + 1)
  }

  decrement(){
    this.countSubject$.next(this.countSubject$.value - 1)
  }
}
