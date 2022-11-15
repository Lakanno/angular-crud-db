import { Injectable } from '@angular/core';
import { ConsoleManagerService } from './console-manager.service';

@Injectable(
  {
  providedIn: 'root'
}
)
export class DummyService {

  constructor(public consoleManager: ConsoleManagerService) { }

  sayHello(){
    this.consoleManager.print('Hello')
  }

}
