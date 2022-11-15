import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BCounterComponent } from './b-counter.component';

describe('BCounterComponent', () => {
  let component: BCounterComponent;
  let fixture: ComponentFixture<BCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
