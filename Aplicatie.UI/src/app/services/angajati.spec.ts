import { TestBed } from '@angular/core/testing';

import { Angajati } from './angajati';

describe('Angajati', () => {
  let service: Angajati;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Angajati);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
