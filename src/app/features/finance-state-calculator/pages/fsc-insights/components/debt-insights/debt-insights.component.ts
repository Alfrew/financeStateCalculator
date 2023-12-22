import { Component, Input, OnInit } from "@angular/core";
import { Panel } from "src/app/shared/utils/panel-utils";
import { LiabilitiesData } from "src/app/features/finance-state-calculator/models/liabilities";
import { FinanceStateData } from "src/app/features/finance-state-calculator/models/finance-state-data";

@Component({
  selector: "fsc-debt-insights",
  templateUrl: "./debt-insights.component.html",
  styleUrls: ["./debt-insights.component.scss"],
})
export class DebtInsightsComponent implements OnInit {
  @Input() financeStateData!: FinanceStateData;
  panelList: Panel[] = [];

  private carLoanToIncomeList: number[] = [20, 10, 0];
  private monthlyDebtToIncomeList: number[] = [100, 50, 25, 15, 0];
  private monthlyIncomeToDebtList: number[] = [100, 50, 25, 15, 0];

  ngOnInit(): void {
    this.returnDebtsInsights();
  }

  /**
   * Used to check the monthly car loan payment to monthly income for the debt insights and update the last panel.
   * @param monthlyIncome the yearly total income divided by 12
   * @param monthlyCarLoan the car loan monthly payment
   */
  private checkCarLoanToIncome(monthlyIncome: number, monthlyCarLoan: number) {
    let carLoanToIncome: number = (monthlyCarLoan / monthlyIncome) * 100;
    let insightLevel: number = 0;
    do {
      insightLevel++;
    } while (carLoanToIncome <= this.carLoanToIncomeList[insightLevel - 1]);
    this.panelList.push({
      title: "fscInsights.debt.carLoan.title",
      intro: "fscInsights.debt.carLoan.intro" + insightLevel,
      text: "fscInsights.debt.carLoan.text" + insightLevel,
    });
  }

  /**
   * Used to check the monthly income to credit card debt for the debt insights and update the second panel.
   * @param monthlyIncome the yearly total income divided by 12
   */
  private checkCreditCardToIncome(monthlyIncome: number) {
    let monthlyIncomeToDebt: number = (this.financeStateData.liabilities.creditCard.assetValue / monthlyIncome) * 100;
    let insightLevel: number = 0;
    do {
      insightLevel++;
    } while (monthlyIncomeToDebt <= this.monthlyIncomeToDebtList[insightLevel - 1]);
    this.panelList.push({
      title: "fscInsights.debt.income.title",
      intro: "fscInsights.debt.income.intro" + insightLevel,
      text: "fscInsights.debt.income.text" + insightLevel,
    });
  }

  /**
   * Used to check the savings to credit card debt for the debt insights and update the first panel.
   * @param totalIncome the sum of all yearly incomes
   */
  private checkCreditCardToSavings(totalIncome: number) {
    let monthlySavings: number = (totalIncome - this.financeStateData.incomes.expenses) / 12;
    let monthToPayDebt: number = this.financeStateData.liabilities.creditCard.assetValue / monthlySavings;
    let insightLevel: number = 0;
    switch (true) {
      case monthToPayDebt < 0:
        insightLevel = 1;
        break;
      case this.financeStateData.liabilities.creditCard.assetValue === 0:
        insightLevel = 4;
        break;
      case monthToPayDebt <= 1:
        insightLevel = 3;
        break;
      case monthToPayDebt > 1:
        insightLevel = 2;
        break;
      default:
        insightLevel = 4;
    }
    this.panelList.push({
      title: "fscInsights.debt.savings.title",
      intro: "fscInsights.debt.savings.intro" + insightLevel,
      text: "fscInsights.debt.savings.text" + insightLevel,
    });
  }

  /**
   * Used to check the monthly debts payment to monthly income for the debt insights and update the third panel.
   * @param monthlyIncome the yearly total income divided by 12
   * @param monthlyDebts the liabilities finance state data
   */
  private checkDebtServiceToIncome(monthlyIncome: number, monthlyDebts: LiabilitiesData) {
    let totalMonthlyDebt: number = 0;
    for (let debt in monthlyDebts) {
      totalMonthlyDebt += monthlyDebts[debt as keyof LiabilitiesData].monthlyPayment;
    }
    let monthlyDebtToIncome: number = (totalMonthlyDebt / monthlyIncome) * 100;
    let insightLevel: number = 0;
    do {
      insightLevel++;
    } while (monthlyDebtToIncome <= this.monthlyDebtToIncomeList[insightLevel - 1]);
    this.panelList.push({
      title: "fscInsights.debt.debtService.title",
      intro: "fscInsights.debt.debtService.intro" + insightLevel,
      text: "fscInsights.debt.debtService.text" + insightLevel,
    });
  }

  /**
   * Used to check all debts insights.
   */
  private returnDebtsInsights() {
    let totalIncome: number = this.financeStateData.incomes.employment + this.financeStateData.incomes.investment + this.financeStateData.incomes.other;
    let monthlyIncome: number = totalIncome / 12;
    this.checkCreditCardToSavings(totalIncome);
    this.checkCreditCardToIncome(monthlyIncome);
    this.checkDebtServiceToIncome(monthlyIncome, this.financeStateData.liabilities);
    this.checkCarLoanToIncome(monthlyIncome, this.financeStateData.liabilities.carLoan.monthlyPayment);
  }
}
