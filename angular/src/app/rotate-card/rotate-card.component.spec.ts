import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateCardComponent } from './rotate-card.component';

describe('RotateCardComponent', () => {
  let component: RotateCardComponent;
  let fixture: ComponentFixture<RotateCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotateCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
