import { Component, Input, OnInit } from "@angular/core";
import { Panel } from "src/app/shared/utils/panel-utils";
import { LiabilitiesBase } from "src/app/features/finance-state-calculator/models/liabilities";
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
    let percentageList: number[] = [-100, -40, -20, 0, 10, 20, 40, 60, 80];
    let totalIncome: number = this.financeStateData.income.employment + this.financeStateData.income.investment + this.financeStateData.income.other;
    let netIncomePercentage: number = ((totalIncome - this.financeStateData.income.expenses) / totalIncome) * 100;
    let insightLevel: number = 0;
    do {
      insightLevel++;
    } while (netIncomePercentage >= percentageList[insightLevel - 1]);
    this.panelList.push({
      title: "priorities.l1.title",
      intro: "priorities.l1.intro" + insightLevel,
      text: "priorities.l1.text" + insightLevel,
    });
  }

  /**
   * Used to check the level 2 of the priorities insights and update the second panel.
   */
  private checkLevel2() {
    let debtInterests: LiabilitiesBase = this.financeStateData.liabilities.interests;
    let insightLevel: number = 2;
    for (let debt in debtInterests) {
      if (debtInterests[debt as keyof LiabilitiesBase] > 7) {
        insightLevel = 1;
      }
    }
    this.panelList.push({
      title: "priorities.l2.title",
      intro: "priorities.l2.intro" + insightLevel,
      text: "priorities.l2.text" + insightLevel,
    });
  }

  /**
   * Used to check the level 3 of the priorities insights and update the third panel.
   */
  private checkLevel3() {
    let emergencyFund: number = this.financeStateData.financialAssets.emergencyFund;
    let monthlyExpenses: number = this.financeStateData.income.expenses / 12;
    let insightLevel: number = 1;
    if (emergencyFund > 0) {
      insightLevel = 2;
      if (emergencyFund > monthlyExpenses * 3) {
        insightLevel = 3;
      }
    }
    this.panelList.push({
      title: "priorities.l3.title",
      intro: "priorities.l3.intro" + insightLevel,
      text: "priorities.l3.text" + insightLevel,
    });
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
    let insightLevel: number = 1;
    if (investments > 0) {
      insightLevel = 2;
    }
    this.panelList.push({
      title: "priorities.l4.title",
      intro: "priorities.l4.intro" + insightLevel,
      text: "priorities.l4.text" + insightLevel,
    });
  }

  /**
   * Used to check the level 5 of the priorities insights and update the last panel.
   */
  private checkLevel5() {
    let debtInterests: LiabilitiesBase = this.financeStateData.liabilities.interests;
    let totalDebt: number = 0;
    let insightLevel: number = 1;
    for (let debt in debtInterests) {
      if (debtInterests[debt as keyof LiabilitiesBase] > 0 && debtInterests[debt as keyof LiabilitiesBase] < 7) {
        totalDebt += this.financeStateData.liabilities[debt as keyof LiabilitiesBase];
      }
    }
    if (totalDebt === 0) {
      insightLevel = 2;
    }
    this.panelList.push({
      title: "priorities.l5.title",
      intro: "priorities.l5.intro" + insightLevel,
      text: "priorities.l5.text" + insightLevel,
    });
  }
}
