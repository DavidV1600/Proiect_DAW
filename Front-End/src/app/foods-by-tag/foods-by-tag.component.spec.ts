import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsByTagComponent } from './foods-by-tag.component';

describe('FoodsByTagComponent', () => {
  let component: FoodsByTagComponent;
  let fixture: ComponentFixture<FoodsByTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodsByTagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodsByTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
