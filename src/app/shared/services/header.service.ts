import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'en' | 'ka'

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private _postCount: number = 0;
  // private _chosenLanguage: Language = 'en';
  private chosenLanguageSubject$ = new BehaviorSubject('en');
  // თუ გვაქვს საბჯექტი აღარ არის საჭირო გეთერი და სეთერი
  // dubject 
  public chosenLanguage$ = this.chosenLanguageSubject$.asObservable();

  constructor() { }

  get postCount() :number{
    return this._postCount;
  }

  set postCount(newCount: number){
    this._postCount = newCount;
  }

  // get chosenLanguage(): Language{
  //   return this._chosenLanguage;
  // }

  // set chosenLanguage(newLanguage: Language){
  //   this._chosenLanguage = newLanguage;
  // }

  changeLanguage(){
    this.chosenLanguageSubject$.next(this.chosenLanguageSubject$.value === 'en' ? 'ka' : 'en');
  }


}
