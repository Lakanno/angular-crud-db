import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleManagerService {

  constructor() { }

  print (message: string){
    console.log(message);
  }
}
