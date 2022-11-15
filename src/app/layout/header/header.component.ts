import { Component, OnInit } from '@angular/core';
import { HeaderService, Language } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  language$ = this.headerService.chosenLanguage$;

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  get count(): number{
    return this.headerService.postCount;
  }

  // get language(): Language{
  //   return this.headerService.chosenLanguage;
  // }

  languageSwitch(){
    // this.headerService.chosenLanguage = this.headerService.chosenLanguage === 'ka' ? 'en' : 'ka';
    this.headerService.changeLanguage();
  }
}
