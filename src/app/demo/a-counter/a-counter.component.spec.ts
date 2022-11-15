import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACounterComponent } from './a-counter.component';

describe('ACounterComponent', () => {
  let component: ACounterComponent;
  let fixture: ComponentFixture<ACounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ACounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ACounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
