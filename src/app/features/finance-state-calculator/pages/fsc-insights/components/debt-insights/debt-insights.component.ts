import { Component, Input, OnInit } from "@angular/core";
import { Panel } from "src/app/shared/utils/panel-utils";
import { LiabilitiesBase } from "src/app/features/finance-state-calculator/models/liabilities";
import { FinanceStateData } from "src/app/features/finance-state-calculator/models/finance-state-data";

@Component({
  selector: "fsc-debt-insights",
  templateUrl: "./debt-insights.component.html",
  styleUrls: ["./debt-insights.component.scss"],
})
export class DebtInsightsComponent implements OnInit {
  @Input() financeStateData!: FinanceStateData;

  panelList: Panel[] = [];

  ngOnInit(): void {
    this.returnDebtsInsights();
  }

  /**
   * Used to check all debts insights.
   */
  returnDebtsInsights() {
    this.checkCreditCardToSavings();
    this.checkCreditCardToIncome();
    this.checkDebtServiceToIncome();
    this.checkCarLoanToIncome();
  }

  /**
   * Used to check the savings to credit card debt for the debt insights and update the first panel.
   */
  private checkCreditCardToSavings() {
    let totalIncome: number = this.financeStateData.income.employment + this.financeStateData.income.investment + this.financeStateData.income.other;
    let monthlySavings: number = (totalIncome - this.financeStateData.income.expenses) / 12;
    let monthToPayDebt: number = this.financeStateData.liabilities.creditCard / monthlySavings;
    let insightLevel: number = 0;
    switch (true) {
      case monthToPayDebt < 0:
        insightLevel = 1;
        break;
      case monthToPayDebt === 0:
        insightLevel = 4;
        break;
      case monthToPayDebt <= 1:
        insightLevel = 3;
        break;
      case monthToPayDebt > 1:
        insightLevel = 2;
        break;
    }
    this.panelList.push({
      title: "debt.savings.title",
      intro: "debt.savings.intro" + insightLevel,
      text: "debt.savings.text" + insightLevel,
    });
  }

  /**
   * Used to check the monthly income to credit card debt for the debt insights and update the second panel.
   */
  private checkCreditCardToIncome() {
    let debtList: number[] = [100, 50, 25, 15, 0];
    let totalIncome: number = this.financeStateData.income.employment + this.financeStateData.income.investment + this.financeStateData.income.other;
    let monthlyIncome: number = totalIncome / 12;
    let monthlyIncomeToDebt: number = (this.financeStateData.liabilities.creditCard / monthlyIncome) * 100;
    let insightLevel: number = 0;
    do {
      insightLevel++;
    } while (monthlyIncomeToDebt <= debtList[insightLevel - 1]);
    this.panelList.push({
      title: "debt.income.title",
      intro: "debt.income.intro" + insightLevel,
      text: "debt.income.text" + insightLevel,
    });
  }

  /**
   * Used to check the monthly debts payment to monthly income for the debt insights and update the third panel.
   */
  private checkDebtServiceToIncome() {
    let debtList: number[] = [100, 50, 25, 15, 0];
    let debtInterests: LiabilitiesBase = this.financeStateData.liabilities.interests;
    let totalIncome: number = this.financeStateData.income.employment + this.financeStateData.income.investment + this.financeStateData.income.other;
    let monthlyIncome: number = totalIncome / 12;
    let totalMonthlyDebt: number = 0;
    for (let debt in debtInterests) {
      totalMonthlyDebt += this.financeStateData.liabilities.monthlyPayment[debt as keyof LiabilitiesBase];
    }
    let debtToMonthlyIncome: number = (totalMonthlyDebt / monthlyIncome) * 100;
    let insightLevel: number = 0;
    do {
      insightLevel++;
    } while (debtToMonthlyIncome <= debtList[insightLevel - 1]);
    this.panelList.push({
      title: "debt.debtService.title",
      intro: "debt.debtService.intro" + insightLevel,
      text: "debt.debtService.text" + insightLevel,
    });
  }

  /**
   * Used to check the monthly car loan payment to monthly income for the debt insights and update the last panel.
   */
  private checkCarLoanToIncome() {
    let loanList: number[] = [20, 10, 0];
    let totalIncome: number = this.financeStateData.income.employment + this.financeStateData.income.investment + this.financeStateData.income.other;
    let monthlyIncome: number = totalIncome / 12;
    let monthlyCarLoan: number = this.financeStateData.liabilities.monthlyPayment.carLoan;
    let loanToIncome: number = (monthlyCarLoan / monthlyIncome) * 100;
    let insightLevel: number = 0;
    do {
      insightLevel++;
    } while (loanToIncome <= loanList[insightLevel - 1]);
    this.panelList.push({
      title: "debt.carLoan.title",
      intro: "debt.carLoan.intro" + insightLevel,
      text: "debt.carLoan.text" + insightLevel,
    });
  }
}
