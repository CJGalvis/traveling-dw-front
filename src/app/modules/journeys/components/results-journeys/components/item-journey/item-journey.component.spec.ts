import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemJourneyComponent } from './item-journey.component';

describe('ItemJourneyComponent', () => {
  let component: ItemJourneyComponent;
  let fixture: ComponentFixture<ItemJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemJourneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
