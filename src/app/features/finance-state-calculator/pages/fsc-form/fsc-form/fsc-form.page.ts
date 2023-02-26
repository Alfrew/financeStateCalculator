import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { InputSelectOption } from "src/app/shared/utils/input-select-utils";
import { FinanceStateData } from "../../../models/finance-state-data";
import { FinanceStateDataService } from "../../../services/finance-state-data.service";

@Component({
  templateUrl: "./fsc-form.page.html",
  styleUrls: ["./fsc-form.page.scss"],
})
export class FscFormPage {
  incomeFormGroup: FormGroup = new FormGroup({
    age: new FormControl(),
    employment: new FormControl(),
    investment: new FormControl(),
    other: new FormControl(),
    expenses: new FormControl(),
    homeOwner: new FormControl("false"),
    rent: new FormControl(),
  });
  financialAssetsFormGroup: FormGroup = new FormGroup({
    cash: new FormControl(),
    cashPercentage: new FormControl(),
    bank: new FormControl(),
    bankPercentage: new FormControl(),
    emergencyFund: new FormControl(),
    emergencyFundPercentage: new FormControl(),
    savings: new FormControl(),
    savingsPercentage: new FormControl(),
    GIC: new FormControl(),
    GICPercentage: new FormControl(),
    bonds: new FormControl(),
    bondsPercentage: new FormControl(),
    stocks: new FormControl(),
    stocksPercentage: new FormControl(),
    stocksDuration: new FormControl(),
    crypto: new FormControl(),
    cryptoPercentage: new FormControl(),
    gold: new FormControl(),
    goldPercentage: new FormControl(),
    other: new FormControl(),
    otherPercentage: new FormControl(),
  });
  physicalAssetsFormGroup: FormGroup = new FormGroup({
    vehicle: new FormControl(),
    vehiclePercentage: new FormControl(),
    property: new FormControl(),
    propertyPercentage: new FormControl(),
    equipment: new FormControl(),
    equipmentPercentage: new FormControl(),
    electronics: new FormControl(),
    electronicsPercentage: new FormControl(),
    other: new FormControl(),
    otherPercentage: new FormControl(),
  });
  liabilitiesFormGroup: FormGroup = new FormGroup({
    creditCard: new FormControl(),
    creditCardPercentage: new FormControl(),
    creditLine: new FormControl(),
    creditLinePercentage: new FormControl(),
    studentLoan1: new FormControl(),
    studentLoan1Percentage: new FormControl(),
    studentLoan2: new FormControl(),
    studentLoan2Percentage: new FormControl(),
    mortgage: new FormControl(),
    mortgagePercentage: new FormControl(),
    carLoan: new FormControl(),
    carLoanPercentage: new FormControl(),
    personalLoan: new FormControl(),
    personalLoanPercentage: new FormControl(),
    medicalDebt: new FormControl(),
    medicalDebtPercentage: new FormControl(),
    other1: new FormControl(),
    other1Percentage: new FormControl(),
    other2: new FormControl(),
    other2Percentage: new FormControl(),
    other3: new FormControl(),
    other3Percentage: new FormControl(),
  });

  formGroupList: FormGroup[] = [this.incomeFormGroup, this.financialAssetsFormGroup, this.physicalAssetsFormGroup, this.liabilitiesFormGroup];
  homeOwnerList: InputSelectOption[] = [
    { value: "false", viewValue: "No" },
    { value: "true", viewValue: "Yes" },
  ];
  stepLabels: string[] = ["Annual income statement (After Tax)", "Financial assets", "Physical assets", "Liabilities"];
  stocksDurationList: InputSelectOption[] = [
    { value: "1", viewValue: "Less than a year" },
    { value: "2", viewValue: "1-5 years" },
    { value: "3", viewValue: "6-10 years" },
    { value: "4", viewValue: "10+ years" },
  ];

  constructor(private financeStateDatasSRV: FinanceStateDataService) {}

  ngOnInit(): void {}

  /**
   * Used to save the form control values in the finance state data service.
   */
  saveData() {
    let responses: FinanceStateData = {
      income: this.incomeFormGroup.value,
      financialAssets: this.financialAssetsFormGroup.value,
      physicalAssets: this.physicalAssetsFormGroup.value,
      liabilities: this.liabilitiesFormGroup.value,
    };

    this.financeStateDatasSRV.updateFinanceStateData(responses);
  }
}
