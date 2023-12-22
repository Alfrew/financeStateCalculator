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

  private cryptoToTotalAssetsList: number[] = [50, 25, 15, 5, 0];

  ngOnInit(): void {
    this.returnInvestmentsInsights();
  }

  /**
   * Used to check if there are investments in crypto for the investment insights and update the fourth panel.
   * @param crypto the crypto value from the financial assets finance state data
   */
  private checkCrypto(crypto: number) {
    let hasCryptoInvestment: boolean = crypto > 0;
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
   * @param crypto the crypto value from the financial assets finance state data
   * @param financialAssets the financial assets finance state data
   * @param physicalAssets the physical assets finance state data
   */
  private checkCryptoPercentage(crypto: number, financialAssets: FinancialAssetsData, physicalAssets: PhysicalAssetsData) {
    if (crypto <= 0) {
      return;
    }
    let totalAssets: number = 0;
    for (let asset in financialAssets) {
      totalAssets += financialAssets[asset as keyof FinancialAssetsData].assetValue;
    }
    for (let asset in physicalAssets) {
      totalAssets += physicalAssets[asset as keyof PhysicalAssetsData].assetValue;
    }
    let cryptoToTotalAssets: number = (crypto / totalAssets) * 100;
    let insightLevel: number = 0;
    do {
      insightLevel++;
    } while (cryptoToTotalAssets <= this.cryptoToTotalAssetsList[insightLevel - 1]);
    this.panelList.push({
      title: "fscInsights.investments.cryptoPercentage.title",
      intro: "fscInsights.investments.cryptoPercentage.intro" + insightLevel,
      text: "fscInsights.investments.cryptoPercentage.text" + insightLevel,
    });
  }

  /**
   * Used to check the stock investments and emergency fund state for the investment insights and update the first panel.
   * @param emergencyFund the emergency fund value from the financial assets finance state data
   */
  private checkStocksAndEmergencyFund(emergencyFund: number) {
    let hasStocksInvestment: boolean = this.financeStateData.financialAssets.stocks.assetValue > 0;
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
   * @param liabilities the liabilities finance state data
   */
  private checkStocksAndDebt(liabilities: LiabilitiesData) {
    let hasStocksInvestment: boolean = this.financeStateData.financialAssets.stocks.assetValue > 0;
    let hasHighInterestDebt: boolean = false;
    for (let debt in liabilities) {
      if (liabilities[debt as keyof LiabilitiesData].changeRate > 7) {
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
   * @param stocksDuration the stocks duration data from the financial assets finance state data
   */
  private checkStocksDuration(stocksDuration: string) {
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
   * Used to check all investments insights.
   */
  private returnInvestmentsInsights() {
    this.checkStocksAndEmergencyFund(this.financeStateData.financialAssets.emergencyFund.assetValue);
    this.checkStocksAndDebt(this.financeStateData.liabilities);
    this.checkStocksDuration(this.financeStateData.financialAssets.stocks.duration);
    this.checkCrypto(this.financeStateData.financialAssets.crypto.assetValue);
    this.checkCryptoPercentage(this.financeStateData.financialAssets.crypto.assetValue, this.financeStateData.financialAssets, this.financeStateData.physicalAssets);
  }
}
