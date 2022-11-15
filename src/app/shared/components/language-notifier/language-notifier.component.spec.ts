import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageNotifierComponent } from './language-notifier.component';

describe('LanguageNotifierComponent', () => {
  let component: LanguageNotifierComponent;
  let fixture: ComponentFixture<LanguageNotifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageNotifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageNotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
