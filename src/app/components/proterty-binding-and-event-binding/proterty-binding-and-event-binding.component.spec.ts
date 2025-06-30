import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtertyBindingAndEventBindingComponent } from './proterty-binding-and-event-binding.component';

describe('ProtertyBindingAndEventBindingComponent', () => {
  let component: ProtertyBindingAndEventBindingComponent;
  let fixture: ComponentFixture<ProtertyBindingAndEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtertyBindingAndEventBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtertyBindingAndEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
