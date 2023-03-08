import { Component, Input, OnInit } from "@angular/core";
import { Panel } from "src/app/shared/utils/panel-utils";
import { LiabilitiesData } from "src/app/features/finance-state-calculator/models/liabilities";
import { FinanceStateData } from "src/app/features/finance-state-calculator/models/finance-state-data";

@Component({
  selector: "fsc-priority-insights",
  templateUrl: "./priority-insights.component.html",
  styleUrls: ["./priority-insights.component.scss"],
})
export class PriorityInsightsComponent implements OnInit {
  @Input() financeStateData!: FinanceStateData;

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
    let netIncomePercentageList: number[] = [-100, -40, -20, 0, 10, 20, 40, 60, 80];
    let totalIncome: number = this.financeStateData.incomes.employment + this.financeStateData.incomes.investment + this.financeStateData.incomes.other;
    let netIncomePercentage: number = ((totalIncome - this.financeStateData.incomes.expenses) / totalIncome) * 100;
    let insightLevel: number = 0;
    do {
      insightLevel++;
    } while (netIncomePercentage >= netIncomePercentageList[insightLevel - 1]);
    this.panelList.push({
      title: "fscInsights.priorities.l1.title",
      intro: "fscInsights.priorities.l1.intro" + insightLevel,
      text: "fscInsights.priorities.l1.text" + insightLevel,
    });
  }

  /**
   * Used to check the level 2 of the priorities insights and update the second panel.
   */
  private checkLevel2() {
    let debtInterests: LiabilitiesData = this.financeStateData.liabilities;
    let insightLevel: number = 2;
    for (let debt in debtInterests) {
      if (debtInterests[debt as keyof LiabilitiesData].changeRate > 7) {
        insightLevel = 1;
      }
    }
    this.panelList.push({
      title: "fscInsights.priorities.l2.title",
      intro: "fscInsights.priorities.l2.intro" + insightLevel,
      text: "fscInsights.priorities.l2.text" + insightLevel,
    });
  }

  /**
   * Used to check the level 3 of the priorities insights and update the third panel.
   */
  private checkLevel3() {
    let emergencyFund: number = this.financeStateData.financialAssets.emergencyFund.assetValue;
    let monthlyExpenses: number = this.financeStateData.incomes.expenses / 12;
    let insightLevel: number = 1;
    if (emergencyFund > 0) {
      insightLevel = 2;
      if (emergencyFund > monthlyExpenses * 3) {
        insightLevel = 3;
      }
    }
    this.panelList.push({
      title: "fscInsights.priorities.l3.title",
      intro: "fscInsights.priorities.l3.intro" + insightLevel,
      text: "fscInsights.priorities.l3.text" + insightLevel,
    });
  }

  /**
   * Used to check the level 4 of the priorities insights and update the fourth panel.
   */
  private checkLevel4() {
    let investments: number =
      this.financeStateData.physicalAssets.property.assetValue +
      this.financeStateData.financialAssets.bonds.assetValue +
      this.financeStateData.financialAssets.stocks.assetValue +
      this.financeStateData.financialAssets.crypto.assetValue +
      this.financeStateData.financialAssets.gold.assetValue;
    let insightLevel: number = 1;
    if (investments > 0) {
      insightLevel = 2;
    }
    this.panelList.push({
      title: "fscInsights.priorities.l4.title",
      intro: "fscInsights.priorities.l4.intro" + insightLevel,
      text: "fscInsights.priorities.l4.text" + insightLevel,
    });
  }

  /**
   * Used to check the level 5 of the priorities insights and update the last panel.
   * TODO check the for loop
   */
  private checkLevel5() {
    let debtInterests: LiabilitiesData = this.financeStateData.liabilities;
    let totalDebt: number = 0;
    let insightLevel: number = 1;
    for (let debt in debtInterests) {
      if (debtInterests[debt as keyof LiabilitiesData].changeRate > 0 && debtInterests[debt as keyof LiabilitiesData].changeRate < 7) {
        totalDebt += debtInterests[debt as keyof LiabilitiesData].assetValue;
      }
    }
    if (totalDebt === 0) {
      insightLevel = 2;
    }
    this.panelList.push({
      title: "fscInsights.priorities.l5.title",
      intro: "fscInsights.priorities.l5.intro" + insightLevel,
      text: "fscInsights.priorities.l5.text" + insightLevel,
    });
  }
}
