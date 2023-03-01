import { Component, OnInit } from "@angular/core";
import { FinanceStateData } from "../../../models/finance-state-data";
import { FinanceStateDataService } from "../../../services/finance-state-data.service";

@Component({
  templateUrl: "./fsc-insights.page.html",
  styleUrls: ["./fsc-insights.page.scss"],
})
export class FscInsightsPage implements OnInit {
  financeStateData?: FinanceStateData;

  constructor(private financeStateDataSRV: FinanceStateDataService) {}

  ngOnInit(): void {
    this.financeStateData = this.financeStateDataSRV.financeStateData;
  }
}
