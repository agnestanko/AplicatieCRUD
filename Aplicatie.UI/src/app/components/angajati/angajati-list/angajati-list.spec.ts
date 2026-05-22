import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngajatiList } from './angajati-list';

describe('AngajatiList', () => {
  let component: AngajatiList;
  let fixture: ComponentFixture<AngajatiList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngajatiList],
    }).compileComponents();

    fixture = TestBed.createComponent(AngajatiList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
