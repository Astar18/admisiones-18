import { TestBed } from '@angular/core/testing';

import { LoginAccionService } from './login-accion.service';

describe('LoginAccionService', () => {
  let service: LoginAccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
