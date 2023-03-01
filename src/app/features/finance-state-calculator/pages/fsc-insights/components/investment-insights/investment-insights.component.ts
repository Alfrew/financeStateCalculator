import { Component, Input, OnInit } from "@angular/core";
import { Panel } from "src/app/shared/utils/panel-utils";
import { LiabilitiesBase } from "src/app/features/finance-state-calculator/models/liabilities";
import { PhysicalAssetsBase } from "src/app/features/finance-state-calculator/models/physical-assets";
import { FinanceStateData } from "src/app/features/finance-state-calculator/models/finance-state-data";
import { FinancialAssetsBase } from "src/app/features/finance-state-calculator/models/financial-assets";

@Component({
  selector: "fsc-investment-insights",
  templateUrl: "./investment-insights.component.html",
  styleUrls: ["./investment-insights.component.scss"],
})
export class InvestmentInsightsComponent implements OnInit {
  @Input() financeStateData!: FinanceStateData;

  panelList: Panel[] = [];

  ngOnInit(): void {
    this.returnInvestmentsInsights();
  }

  /**
   * Used to check all investments insights.
   */
  returnInvestmentsInsights() {
    this.checkStocksAndEmergencyFund();
    this.checkStocksAndDebt();
    this.checkStocksDuration();
    this.checkCrypto();
    this.checkCryptoPercentage();
  }

  /**
   * Used to check the stock investments and emergency fund state for the investment insights and update the first panel.
   */
  private checkStocksAndEmergencyFund() {
    let hasStocksInvestment: boolean = this.financeStateData.financialAssets.stocks > 0;
    let emergencyFund: number = this.financeStateData.financialAssets.emergencyFund;
    let emergencyFundGoal: number = (this.financeStateData.income.expenses / 12) * 3;
    let insightLevel: number = 0;
    switch (true) {
      case !hasStocksInvestment:
        insightLevel = 1;
        break;
      case emergencyFund < emergencyFundGoal:
        insightLevel = 2;
        break;
      case emergencyFund >= emergencyFundGoal:
        insightLevel = 3;
    }
    this.panelList.push({
      title: "investments.emergencyFund.title",
      intro: "investments.emergencyFund.intro" + insightLevel,
      text: "investments.emergencyFund.text" + insightLevel,
    });
  }

  /**
   * Used to check the stock investments and high interest debts state for the investment insights and update the second panel.
   */
  private checkStocksAndDebt() {
    let hasStocksInvestment: boolean = this.financeStateData.financialAssets.stocks > 0;
    let debtInterests: LiabilitiesBase = this.financeStateData.liabilities.interests;
    let hasHighInterestDebt: boolean = false;
    for (let debt in debtInterests) {
      if (debtInterests[debt as keyof LiabilitiesBase] > 7) {
        hasHighInterestDebt = true;
      }
    }
    let insightLevel: number = 0;
    switch (true) {
      case !hasStocksInvestment:
        insightLevel = 1;
        break;
      case hasStocksInvestment && hasHighInterestDebt:
        insightLevel = 2;
        break;
      case hasStocksInvestment && !hasHighInterestDebt:
        insightLevel = 3;
    }
    this.panelList.push({
      title: "investments.stocksDebt.title",
      intro: "investments.stocksDebt.intro" + insightLevel,
      text: "investments.stocksDebt.text" + insightLevel,
    });
  }

  /**
   * Used to check the stock investments planned duration for the investment insights and update the third panel.
   */
  private checkStocksDuration() {
    let stocksDuration: string = this.financeStateData.financialAssets.stocksDuration;
    let insightLevel: number = 0;
    switch (stocksDuration) {
      case "1":
        insightLevel = 1;
        break;
      case "2":
        insightLevel = 2;
        break;
      case "3":
        insightLevel = 3;
        break;
      case "4":
        insightLevel = 4;
    }
    this.panelList.push({
      title: "investments.stocksDuration.title",
      intro: "investments.stocksDuration.intro" + insightLevel,
      text: "investments.stocksDuration.text" + insightLevel,
    });
  }

  /**
   * Used to check if there are investments in crypto for the investment insights and update the fourth panel.
   */
  private checkCrypto() {
    let hasCryptoInvestment: boolean = this.financeStateData.financialAssets.crypto > 0;
    let insightLevel: number = 1;
    if (hasCryptoInvestment) {
      insightLevel = 2;
    }
    this.panelList.push({
      title: "investments.crypto.title",
      intro: "investments.crypto.intro" + insightLevel,
      text: "investments.crypto.text" + insightLevel,
    });
  }

  /**
   * Used to check the crypto to total assets for the investment insights and update the last panel.
   */
  private checkCryptoPercentage() {
    let cryptoList: number[] = [50, 25, 15, 5, 0];
    let hasCryptoInvestment: boolean = this.financeStateData.financialAssets.crypto > 0;
    if (!hasCryptoInvestment) {
      return;
    }
    let financialAssets: FinancialAssetsBase = this.financeStateData.financialAssets.interests;
    let physicalAssets: PhysicalAssetsBase = this.financeStateData.physicalAssets.interests;
    let totalAssets: number = 0;
    for (let asset in financialAssets) {
      totalAssets += this.financeStateData.financialAssets[asset as keyof FinancialAssetsBase];
    }
    for (let asset in physicalAssets) {
      totalAssets += this.financeStateData.physicalAssets[asset as keyof PhysicalAssetsBase];
    }
    let cryptoToTotalAssets: number = (this.financeStateData.financialAssets.crypto / totalAssets) * 100;
    let insightLevel: number = 0;
    do {
      insightLevel++;
    } while (cryptoToTotalAssets <= cryptoList[insightLevel - 1]);
    this.panelList.push({
      title: "investments.cryptoPercentage.title",
      intro: "investments.cryptoPercentage.intro" + insightLevel,
      text: "investments.cryptoPercentage.text" + insightLevel,
    });
  }
}
