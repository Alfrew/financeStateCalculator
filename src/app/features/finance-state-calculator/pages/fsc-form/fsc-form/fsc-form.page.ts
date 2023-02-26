import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { InputSelectOption } from "src/app/shared/utils/input-select-utils";

@Component({
  selector: "fsc-form",
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
    homeOwner: new FormControl(),
    rent: new FormControl(),
  });
  financialAssetsFormGroup: FormGroup = new FormGroup({
    cash: new FormControl(),
    cashP: new FormControl(),
    bank: new FormControl(),
    bankP: new FormControl(),
    emergencyFund: new FormControl(),
    emergencyFundP: new FormControl(),
    savings: new FormControl(),
    savingsP: new FormControl(),
    GIC: new FormControl(),
    GICP: new FormControl(),
    bonds: new FormControl(),
    bondsP: new FormControl(),
    stocks: new FormControl(),
    stocksP: new FormControl(),
    stocksD: new FormControl(),
    crypto: new FormControl(),
    cryptoP: new FormControl(),
    gold: new FormControl(),
    goldP: new FormControl(),
    other: new FormControl(),
    otherP: new FormControl(),
  });
  physicalAssetsFormGroup: FormGroup = new FormGroup({
    vehicle: new FormControl(),
    vehicleP: new FormControl(),
    property: new FormControl(),
    propertyP: new FormControl(),
    equipment: new FormControl(),
    equipmentP: new FormControl(),
    electronics: new FormControl(),
    electronicsP: new FormControl(),
    other: new FormControl(),
    otherP: new FormControl(),
  });
  liabilitiesFormGroup: FormGroup = new FormGroup({
    creditCard: new FormControl(),
    creditCardP: new FormControl(),
    creditLine: new FormControl(),
    creditLineP: new FormControl(),
    studentLoan1: new FormControl(),
    studentLoan1P: new FormControl(),
    studentLoan2: new FormControl(),
    studentLoan2P: new FormControl(),
    mortgage: new FormControl(),
    mortgageP: new FormControl(),
    carLoan: new FormControl(),
    carLoanP: new FormControl(),
    personalLoan: new FormControl(),
    personalLoanP: new FormControl(),
    medicalDebt: new FormControl(),
    medicalDebtP: new FormControl(),
    other1: new FormControl(),
    other1P: new FormControl(),
    other2: new FormControl(),
    other2P: new FormControl(),
    other3: new FormControl(),
    other3P: new FormControl(),
  });

  formGroupList: FormGroup[] = [this.incomeFormGroup, this.financialAssetsFormGroup, this.physicalAssetsFormGroup, this.liabilitiesFormGroup];
  labels: string[] = ["Annual income statement (After Tax)", "Financial assets", "Physical assets", "Liabilities"];
  homeOwnerList: InputSelectOption[] = [
    { value: "false", viewValue: "No" },
    { value: "true", viewValue: "Yes" },
  ];
  stocksDurationList: InputSelectOption[] = [
    { value: "1", viewValue: "Less than a year" },
    { value: "2", viewValue: "1-5 years" },
    { value: "3", viewValue: "6-10 years" },
    { value: "4", viewValue: "10+ years" },
  ];
  ngOnInit(): void {
    console.log(this.formGroupList);
  }
}
