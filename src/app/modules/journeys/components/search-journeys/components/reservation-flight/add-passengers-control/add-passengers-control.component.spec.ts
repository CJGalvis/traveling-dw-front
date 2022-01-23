import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPassengersControlComponent } from './add-passengers-control.component';

describe('AddPassengersControlComponent', () => {
  let component: AddPassengersControlComponent;
  let fixture: ComponentFixture<AddPassengersControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPassengersControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPassengersControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
