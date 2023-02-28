import { Component, Input, OnInit } from "@angular/core";
import { Panel } from "src/app/shared/utils/panel-utils";
import { LiabilitiesInterests } from "src/app/features/finance-state-calculator/models/liabilities";
import { FinanceStateData } from "src/app/features/finance-state-calculator/models/finance-state-data";
import { FINANCIAL_STATE_DATA_MOCKUP } from "src/app/features/finance-state-calculator/utils/financial-state-data-mockup";

@Component({
  selector: "fsc-priorities-insights",
  templateUrl: "./priorities-insights.component.html",
  styleUrls: ["./priorities-insights.component.scss"],
})
export class PrioritiesInsightsComponent implements OnInit {
  @Input() financeStateData: FinanceStateData = FINANCIAL_STATE_DATA_MOCKUP;

  panelList: Panel[] = [];

  ngOnInit(): void {
    this.returnPrioritiesInsights();
  }

  /**
   * Used to check all priorities step levels.
   */
  returnPrioritiesInsights() {
    this.checkLevel1();
    this.checkLevel2();
    this.checkLevel3();
    this.checkLevel4();
    this.checkLevel5();
  }

  /**
   * Used to check the level 1 of the priorities insights and update the first panel.
   */
  private checkLevel1() {
    let totalIncome: number = this.financeStateData.income.employment + this.financeStateData.income.investment + this.financeStateData.income.other;
    let netIncomePercentage: number = ((totalIncome - this.financeStateData.income.expenses) / totalIncome) * 100;
    let percentageList: number[] = [-100, -40, -20, 0, 10, 20, 40, 60, 80];
    let stepLevel: number = 0;
    do {
      stepLevel++;
    } while (netIncomePercentage > percentageList[stepLevel - 1]);
    this.panelList[0] = {
      title: "priorities.l1.title",
      intro: "priorities.l1.intro" + stepLevel,
      text: "priorities.l1.text" + stepLevel,
    };
  }

  /**
   * Used to check the level 2 of the priorities insights and update the second panel.
   */
  private checkLevel2() {
    let debtInterests: LiabilitiesInterests = this.financeStateData.liabilities.interests;
    let stepLevel: number = 2;
    for (let debt in debtInterests) {
      if (debtInterests[debt as keyof LiabilitiesInterests] > 7) {
        stepLevel = 1;
      }
    }
    this.panelList[1] = {
      title: "priorities.l2.title",
      intro: "priorities.l2.intro" + stepLevel,
      text: "priorities.l2.text" + stepLevel,
    };
  }

  /**
   * Used to check the level 3 of the priorities insights and update the third panel.
   */
  private checkLevel3() {
    let emergencyFund: number = this.financeStateData.financialAssets.emergencyFund;
    let monthlyExpenses: number = this.financeStateData.income.expenses / 12;
    let stepLevel: number = 1;
    if (emergencyFund > 0) {
      stepLevel = 2;
      if (emergencyFund > monthlyExpenses) {
        stepLevel = 3;
      }
    }
    this.panelList[2] = {
      title: "priorities.l3.title",
      intro: "priorities.l3.intro" + stepLevel,
      text: "priorities.l3.text" + stepLevel,
    };
  }

  /**
   * Used to check the level 4 of the priorities insights and update the fourth panel.
   */
  private checkLevel4() {
    let investments: number =
      this.financeStateData.physicalAssets.property +
      this.financeStateData.financialAssets.bonds +
      this.financeStateData.financialAssets.stocks +
      this.financeStateData.financialAssets.crypto +
      this.financeStateData.financialAssets.gold;
    let stepLevel: number = 1;
    if (investments > 0) {
      stepLevel = 2;
    }
    this.panelList[3] = {
      title: "priorities.l4.title",
      intro: "priorities.l4.intro" + stepLevel,
      text: "priorities.l4.text" + stepLevel,
    };
  }

  /**
   * Used to check the level 5 of the priorities insights and update the last panel.
   */
  private checkLevel5() {
    let debtInterests: LiabilitiesInterests = this.financeStateData.liabilities.interests;
    let totalDebt: number = 0;
    let stepLevel: number = 1;
    for (let debt in debtInterests) {
      if (debtInterests[debt as keyof LiabilitiesInterests] > 0 && debtInterests[debt as keyof LiabilitiesInterests] < 7) {
        totalDebt += this.financeStateData.liabilities[debt as keyof LiabilitiesInterests];
      }
    }
    if (totalDebt === 0) {
      stepLevel = 2;
    }
    this.panelList[4] = {
      title: "priorities.l5.title",
      intro: "priorities.l5.intro" + stepLevel,
      text: "priorities.l5.text" + stepLevel,
    };
  }
}
