import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAngajati } from './add-angajati';

describe('AddAngajati', () => {
  let component: AddAngajati;
  let fixture: ComponentFixture<AddAngajati>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAngajati],
    }).compileComponents();

    fixture = TestBed.createComponent(AddAngajati);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
