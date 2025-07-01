import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceFruitsComponent } from './exercice-fruits.component';

describe('ExerciceFruitsComponent', () => {
  let component: ExerciceFruitsComponent;
  let fixture: ComponentFixture<ExerciceFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciceFruitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
