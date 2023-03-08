import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FinanceStateData } from "../../../models/finance-state-data";
import { FinanceStateDataService } from "../../../services/finance-state-data.service";

@Component({
  templateUrl: "./fsc-insights.page.html",
  styleUrls: ["./fsc-insights.page.scss"],
})
export class FscInsightsPage implements OnInit {
  financeStateData?: FinanceStateData;

  constructor(private financeStateDataSRV: FinanceStateDataService, private router: Router) {}

  ngOnInit(): void {
    this.getFSDfromService();
  }

  /**
   * Used to get the data from the finance data service or redirect if not founds.
   */
  private getFSDfromService(): void {
    if (this.financeStateDataSRV.financeStateData) {
      this.financeStateData = this.financeStateDataSRV.financeStateData;
    } else {
      console.error("The finance state data service is empty");
      this.router.navigate([""]);
    }
  }
}
