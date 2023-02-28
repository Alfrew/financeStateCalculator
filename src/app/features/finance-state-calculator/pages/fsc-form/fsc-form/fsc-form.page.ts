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
    age: new FormControl(0),
    employment: new FormControl(0),
    investment: new FormControl(0),
    other: new FormControl(0),
    expenses: new FormControl(0),
    homeOwner: new FormControl("false"),
    rent: new FormControl(0),
  });
  financialAssetsFormGroup: FormGroup = new FormGroup({
    cash: new FormControl(0),
    bank: new FormControl(0),
    emergencyFund: new FormControl(0),
    savings: new FormControl(0),
    GIC: new FormControl(0),
    bonds: new FormControl(0),
    stocks: new FormControl(0),
    stocksDuration: new FormControl("1"),
    crypto: new FormControl(0),
    gold: new FormControl(3),
    other: new FormControl(0),
    interests: new FormGroup({
      cash: new FormControl(-1),
      bank: new FormControl(0),
      emergencyFund: new FormControl(0),
      savings: new FormControl(2),
      GIC: new FormControl(0),
      bonds: new FormControl(0),
      stocks: new FormControl(7),
      crypto: new FormControl(0),
      gold: new FormControl(0),
      other: new FormControl(0),
    }),
  });
  physicalAssetsFormGroup: FormGroup = new FormGroup({
    vehicle: new FormControl(0),
    property: new FormControl(0),
    equipment: new FormControl(0),
    electronics: new FormControl(0),
    other: new FormControl(0),
    interests: new FormGroup({
      vehicle: new FormControl(-15),
      property: new FormControl(5),
      equipment: new FormControl(-15),
      electronics: new FormControl(-15),
      other: new FormControl(2),
    }),
  });
  liabilitiesFormGroup: FormGroup = new FormGroup({
    interests: new FormGroup({
      creditCard: new FormControl(0),
      creditLine: new FormControl(0),
      studentLoan1: new FormControl(0),
      studentLoan2: new FormControl(0),
      mortgage: new FormControl(0),
      carLoan: new FormControl(0),
      personalLoan: new FormControl(0),
      medicalDebt: new FormControl(0),
      other1: new FormControl(0),
      other2: new FormControl(0),
      other3: new FormControl(0),
    }),
    creditCard: new FormControl(0),
    creditLine: new FormControl(0),
    studentLoan1: new FormControl(0),
    studentLoan2: new FormControl(0),
    mortgage: new FormControl(0),
    carLoan: new FormControl(0),
    personalLoan: new FormControl(0),
    medicalDebt: new FormControl(0),
    other1: new FormControl(0),
    other2: new FormControl(0),
    other3: new FormControl(0),
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
    console.log(responses);
  }
}
