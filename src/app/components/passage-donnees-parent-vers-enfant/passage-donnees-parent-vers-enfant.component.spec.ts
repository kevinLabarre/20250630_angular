import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageDonneesParentVersEnfantComponent } from './passage-donnees-parent-vers-enfant.component';

describe('PassageDonneesParentVersEnfantComponent', () => {
  let component: PassageDonneesParentVersEnfantComponent;
  let fixture: ComponentFixture<PassageDonneesParentVersEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassageDonneesParentVersEnfantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassageDonneesParentVersEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
