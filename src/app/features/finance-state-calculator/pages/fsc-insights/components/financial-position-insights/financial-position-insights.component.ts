import { Component, Input, OnInit } from "@angular/core";
import { Panel } from "src/app/shared/utils/panel-utils";
import { LiabilitiesData } from "src/app/features/finance-state-calculator/models/liabilities";
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
    let age: number = this.financeStateData.incomes.age;
    let insightLevel: number = 0;
    do {
      insightLevel++;
    } while (age >= ageList[insightLevel - 1]);
    this.panelList.push({
      title: "fscInsights.position.age.title",
      intro: "fscInsights.position.age.intro" + insightLevel,
      text: "fscInsights.position.age.text" + insightLevel,
    });
  }

  /**
   * Used to check the liquidity to debt for the financial position insights and update the second panel.
   */
  private checkLiquidityToDebt() {
    let liquidityToDebtList: number[] = [10, 25, 50, 75, 90, 100, 101];
    let debts: LiabilitiesData = this.financeStateData.liabilities;
    let totalLiquidity: number =
      this.financeStateData.financialAssets.cash.assetValue +
      this.financeStateData.financialAssets.bank.assetValue +
      this.financeStateData.financialAssets.emergencyFund.assetValue +
      this.financeStateData.financialAssets.savings.assetValue;
    let totalDebt: number = 0;
    for (let debt in debts) {
      if (debt !== "mortgage") {
        totalDebt += debts[debt as keyof LiabilitiesData].assetValue;
      }
    }
    let liquidityToDebt: number = (totalLiquidity / totalDebt) * 100;
    let insightLevel: number = 0;
    do {
      insightLevel++;
    } while (liquidityToDebt >= liquidityToDebtList[insightLevel - 1]);
    this.panelList.push({
      title: "fscInsights.position.liquidity.title",
      intro: "fscInsights.position.liquidity.intro" + insightLevel,
      text: "fscInsights.position.liquidity.text" + insightLevel,
    });
  }

  /**
   * Used to check the housing costs for the financial position insights and update the third panel.
   */
  private checkHousingCosts() {
    let incomeToHousingCostList: number[] = [30, 20, 10, 0];
    let totalIncome: number = this.financeStateData.incomes.employment + this.financeStateData.incomes.investment + this.financeStateData.incomes.other;
    let monthlyIncome: number = totalIncome / 12;
    let housingCost: number = 0;
    if (this.financeStateData.liabilities.mortgage.assetValue > 0) {
      housingCost = this.financeStateData.liabilities.mortgage.assetValue;
    } else if (this.financeStateData.incomes.rent && this.financeStateData.incomes.rent > 0) {
      housingCost = this.financeStateData.incomes.rent;
    }
    let incomeToHousingCost: number = (housingCost / monthlyIncome) * 100;
    let insightLevel: number = 0;
    do {
      insightLevel++;
    } while (incomeToHousingCost <= incomeToHousingCostList[insightLevel - 1]);
    this.panelList.push({
      title: "fscInsights.position.housingCost.title",
      intro: "fscInsights.position.housingCost.intro" + insightLevel,
      text: "fscInsights.position.housingCost.text" + insightLevel,
    });
  }

  /**
   * Used to check the housing situation for the financial position insights and update the last panel.
   */
  private checkHousingSituation() {
    let isHomeOwner: string = this.financeStateData.incomes.homeOwner;
    let insightLevel: number = 1;
    if (isHomeOwner === "true") {
      insightLevel = 2;
    }
    this.panelList.push({
      title: "fscInsights.position.housingSituation.title",
      intro: "fscInsights.position.housingSituation.intro" + insightLevel,
      text: "fscInsights.position.housingSituation.text" + insightLevel,
    });
  }
}
