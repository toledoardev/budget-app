import { TestBed } from '@angular/core/testing';

import { BudgetService } from './budget.service';

describe('BudgetService', () => {
  let service: PresupuestoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
