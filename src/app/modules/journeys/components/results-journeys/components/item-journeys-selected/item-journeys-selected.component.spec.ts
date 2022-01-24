import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemJourneysSelectedComponent } from './item-journeys-selected.component';

describe('ItemJourneysSelectedComponent', () => {
  let component: ItemJourneysSelectedComponent;
  let fixture: ComponentFixture<ItemJourneysSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemJourneysSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemJourneysSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
