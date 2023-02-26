import { TestBed } from "@angular/core/testing";

import { FinanceStateDataService } from "./finance-state-data.service";

describe("FinanceStateDataService", () => {
  let service: FinanceStateDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinanceStateDataService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
