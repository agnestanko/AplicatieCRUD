import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAngajati } from './edit-angajati';

describe('EditAngajati', () => {
  let component: EditAngajati;
  let fixture: ComponentFixture<EditAngajati>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAngajati],
    }).compileComponents();

    fixture = TestBed.createComponent(EditAngajati);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
