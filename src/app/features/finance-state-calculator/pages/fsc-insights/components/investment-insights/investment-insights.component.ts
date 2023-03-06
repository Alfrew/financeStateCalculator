import { Component, Input, OnInit } from "@angular/core";
import { Panel } from "src/app/shared/utils/panel-utils";
import { LiabilitiesData } from "src/app/features/finance-state-calculator/models/liabilities";
import { PhysicalAssetsData } from "src/app/features/finance-state-calculator/models/physical-assets";
import { FinanceStateData } from "src/app/features/finance-state-calculator/models/finance-state-data";
import { FinancialAssetsData } from "src/app/features/finance-state-calculator/models/financial-assets";

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
    let hasStocksInvestment: boolean = this.financeStateData.financialAssets.stocks.assetValue > 0;
    let emergencyFund: number = this.financeStateData.financialAssets.emergencyFund.assetValue;
    let emergencyFundGoal: number = (this.financeStateData.incomes.expenses / 12) * 3;
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
      title: "fscInsights.investments.emergencyFund.title",
      intro: "fscInsights.investments.emergencyFund.intro" + insightLevel,
      text: "fscInsights.investments.emergencyFund.text" + insightLevel,
    });
  }

  /**
   * Used to check the stock investments and high interest debts state for the investment insights and update the second panel.
   */
  private checkStocksAndDebt() {
    let hasStocksInvestment: boolean = this.financeStateData.financialAssets.stocks.assetValue > 0;
    let debtInterests: LiabilitiesData = this.financeStateData.liabilities;
    let hasHighInterestDebt: boolean = false;
    for (let debt in debtInterests) {
      if (debtInterests[debt as keyof LiabilitiesData].changeRate > 7) {
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
      title: "fscInsights.investments.stocksDebt.title",
      intro: "fscInsights.investments.stocksDebt.intro" + insightLevel,
      text: "fscInsights.investments.stocksDebt.text" + insightLevel,
    });
  }

  /**
   * Used to check the stock investments planned duration for the investment insights and update the third panel.
   */
  private checkStocksDuration() {
    let stocksDuration: string = this.financeStateData.financialAssets.stocks.duration;
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
      title: "fscInsights.investments.stocksDuration.title",
      intro: "fscInsights.investments.stocksDuration.intro" + insightLevel,
      text: "fscInsights.investments.stocksDuration.text" + insightLevel,
    });
  }

  /**
   * Used to check if there are investments in crypto for the investment insights and update the fourth panel.
   */
  private checkCrypto() {
    let hasCryptoInvestment: boolean = this.financeStateData.financialAssets.crypto.assetValue > 0;
    let insightLevel: number = 1;
    if (hasCryptoInvestment) {
      insightLevel = 2;
    }
    this.panelList.push({
      title: "fscInsights.investments.crypto.title",
      intro: "fscInsights.investments.crypto.intro" + insightLevel,
      text: "fscInsights.investments.crypto.text" + insightLevel,
    });
  }

  /**
   * Used to check the crypto to total assets for the investment insights and update the last panel.
   */
  private checkCryptoPercentage() {
    let cryptoToTotalAssetsList: number[] = [50, 25, 15, 5, 0];
    let crypto: number = this.financeStateData.financialAssets.crypto.assetValue;
    if (crypto <= 0) {
      return;
    }
    let financialAssets: FinancialAssetsData = this.financeStateData.financialAssets;
    let physicalAssets: PhysicalAssetsData = this.financeStateData.physicalAssets;
    let totalAssets: number = 0;
    for (let asset in financialAssets) {
      totalAssets += this.financeStateData.financialAssets[asset as keyof FinancialAssetsData].assetValue;
    }
    for (let asset in physicalAssets) {
      totalAssets += this.financeStateData.physicalAssets[asset as keyof PhysicalAssetsData].assetValue;
    }
    let cryptoToTotalAssets: number = (crypto / totalAssets) * 100;
    let insightLevel: number = 0;
    do {
      insightLevel++;
    } while (cryptoToTotalAssets <= cryptoToTotalAssetsList[insightLevel - 1]);
    this.panelList.push({
      title: "fscInsights.investments.cryptoPercentage.title",
      intro: "fscInsights.investments.cryptoPercentage.intro" + insightLevel,
      text: "fscInsights.investments.cryptoPercentage.text" + insightLevel,
    });
  }
}
