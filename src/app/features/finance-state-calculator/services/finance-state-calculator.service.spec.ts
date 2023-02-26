import { TestBed } from "@angular/core/testing";

import { FinanceStateCalculatorService } from "./finance-state-calculator.service";

describe("FinanceStateCalculatorService", () => {
  let service: FinanceStateCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinanceStateCalculatorService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
