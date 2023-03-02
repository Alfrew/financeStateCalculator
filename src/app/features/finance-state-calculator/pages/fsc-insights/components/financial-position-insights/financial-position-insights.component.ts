import { Component, Input, OnInit } from "@angular/core";
import { Panel } from "src/app/shared/utils/panel-utils";
import { LiabilitiesBase } from "src/app/features/finance-state-calculator/models/liabilities";
import { FinanceStateData } from "src/app/features/finance-state-calculator/models/finance-state-data";

@Component({
  selector: "fsc-financial-position-insights",
  templateUrl: "./financial-position-insights.component.html",
  styleUrls: ["./financial-position-insights.component.scss"],
})
export class FinancialPositionInsightsComponent implements OnInit {
  @Input() financeStateData!: FinanceStateData;

  panelList: Panel[] = [];

  ngOnInit(): void {
    this.returnFinancialPositionInsights();
  }

  /**
   * Used to check all financial position insights.
   */
  returnFinancialPositionInsights() {
    this.checkAge();
    this.checkLiquidityToDebt();
    this.checkHousingCosts();
    this.checkHousingSituation();
  }

  /**
   * Used to check the age for the position insights and update the first panel.
   */
  private checkAge() {
    let ageList: number[] = [18, 25, 35, 45, 55, 65];
    let age: number = this.financeStateData.income.age;
    let insightLevel: number = 0;
    do {
      insightLevel++;
    } while (age >= ageList[insightLevel - 1]);
    this.panelList.push({
      title: "insights.position.age.title",
      intro: "insights.position.age.intro" + insightLevel,
      text: "insights.position.age.text" + insightLevel,
    });
  }

  /**
   * Used to check the liquidity to debt for the financial position insights and update the second panel.
   */
  private checkLiquidityToDebt() {
    let liquidityList: number[] = [10, 25, 50, 75, 90, 100, 101];
    let debtInterests: LiabilitiesBase = this.financeStateData.liabilities.interests;
    let totalLiquidity: number =
      this.financeStateData.financialAssets.cash +
      this.financeStateData.financialAssets.bank +
      this.financeStateData.financialAssets.emergencyFund +
      this.financeStateData.financialAssets.savings;
    let totalDebt: number = 0;
    for (let debt in debtInterests) {
      if (debt !== "mortgage") {
        totalDebt += this.financeStateData.liabilities[debt as keyof LiabilitiesBase];
      }
    }
    let liquidityToDebt: number = (totalLiquidity / totalDebt) * 100;
    let insightLevel: number = 0;
    do {
      insightLevel++;
    } while (liquidityToDebt >= liquidityList[insightLevel - 1]);
    this.panelList.push({
      title: "insights.position.liquidity.title",
      intro: "insights.position.liquidity.intro" + insightLevel,
      text: "insights.position.liquidity.text" + insightLevel,
    });
  }

  /**
   * Used to check the housing costs for the financial position insights and update the third panel.
   */
  private checkHousingCosts() {
    let costList: number[] = [30, 20, 10, 0];
    let totalIncome: number = this.financeStateData.income.employment + this.financeStateData.income.investment + this.financeStateData.income.other;
    let monthlyIncome: number = totalIncome / 12;
    let housingCost: number = 0;
    if (this.financeStateData.liabilities.mortgage > 0) {
      housingCost = this.financeStateData.liabilities.mortgage;
    } else if (this.financeStateData.income.rent && this.financeStateData.income.rent > 0) {
      housingCost = this.financeStateData.income.rent;
    }
    let liquidityToDebt: number = (housingCost / monthlyIncome) * 100;
    let insightLevel: number = 0;
    do {
      insightLevel++;
    } while (liquidityToDebt <= costList[insightLevel - 1]);
    this.panelList.push({
      title: "insights.position.housingCost.title",
      intro: "insights.position.housingCost.intro" + insightLevel,
      text: "insights.position.housingCost.text" + insightLevel,
    });
  }

  /**
   * Used to check the housing situation for the financial position insights and update the last panel.
   */
  private checkHousingSituation() {
    let isHomeOwner: string = this.financeStateData.income.homeOwner;
    let insightLevel: number = 1;
    if (isHomeOwner === "true") {
      insightLevel = 2;
    }
    this.panelList.push({
      title: "insights.position.housingSituation.title",
      intro: "insights.position.housingSituation.intro" + insightLevel,
      text: "insights.position.housingSituation.text" + insightLevel,
    });
  }
}
