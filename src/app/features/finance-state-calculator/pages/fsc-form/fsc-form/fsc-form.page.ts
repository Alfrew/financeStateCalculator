import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { IncomesData } from "../../../models/incomes";
import { FormControl, FormGroup } from "@angular/forms";
import { LiabilitiesData } from "../../../models/liabilities";
import { PhysicalAssetsData } from "../../../models/physical-assets";
import { FinanceStateData } from "../../../models/finance-state-data";
import { FinancialAssetsData } from "../../../models/financial-assets";
import { InputSelectOption } from "src/app/shared/utils/input-select-utils";
import { FinanceStateDataService } from "../../../services/finance-state-data.service";

@Component({
  templateUrl: "./fsc-form.page.html",
  styleUrls: ["./fsc-form.page.scss"],
})
export class FscFormPage {
  incomesFormGroup: FormGroup = new FormGroup({
    age: new FormControl(),
    employment: new FormControl(),
    expenses: new FormControl(),
    homeOwner: new FormControl("false"),
    investment: new FormControl(),
    other: new FormControl(),
    rent: new FormControl(),
  });
  financialAssetsFormGroup: FormGroup = new FormGroup({
    bank: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(0),
    }),
    bonds: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(0),
    }),
    cash: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(-1),
    }),
    crypto: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(0),
    }),
    emergencyFund: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(0),
    }),
    GIC: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(0),
    }),
    gold: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(3),
    }),
    other: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(0),
    }),
    savings: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(2),
    }),
    stocks: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(7),
      duration: new FormControl("1"),
    }),
  });

  physicalAssetsFormGroup: FormGroup = new FormGroup({
    electronics: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(-15),
    }),
    equipment: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(-15),
    }),
    other: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(2),
    }),
    property: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(5),
    }),
    vehicle: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(-15),
    }),
  });

  liabilitiesFormGroup: FormGroup = new FormGroup({
    carLoan: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(),
      monthlyPayment: new FormControl(),
    }),
    creditCard: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(),
      monthlyPayment: new FormControl(),
    }),
    creditLine: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(),
      monthlyPayment: new FormControl(),
    }),
    medicalDebt: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(),
      monthlyPayment: new FormControl(),
    }),
    mortgage: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(),
      monthlyPayment: new FormControl(),
    }),
    other1: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(),
      monthlyPayment: new FormControl(),
    }),
    other2: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(),
      monthlyPayment: new FormControl(),
    }),
    other3: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(),
      monthlyPayment: new FormControl(),
    }),
    personalLoan: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(),
      monthlyPayment: new FormControl(),
    }),
    studentLoan1: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(),
      monthlyPayment: new FormControl(),
    }),
    studentLoan2: new FormGroup({
      assetValue: new FormControl(),
      changeRate: new FormControl(),
      monthlyPayment: new FormControl(),
    }),
  });

  formGroupList: FormGroup[] = [this.incomesFormGroup, this.financialAssetsFormGroup, this.physicalAssetsFormGroup, this.liabilitiesFormGroup];
  homeOwnerList: InputSelectOption[] = [
    { value: "false", viewValue: "common.no" },
    { value: "true", viewValue: "common.yes" },
  ];
  stepLabels: string[] = ["fscForm.income.title", "fscForm.financialAssets.title", "fscForm.physicalAssets.title", "fscForm.liabilities.title"];
  stocksDurationList: InputSelectOption[] = [
    { value: "1", viewValue: "fscForm.financialAssets.stocksDuration.label1" },
    { value: "2", viewValue: "fscForm.financialAssets.stocksDuration.label2" },
    { value: "3", viewValue: "fscForm.financialAssets.stocksDuration.label3" },
    { value: "4", viewValue: "fscForm.financialAssets.stocksDuration.label4" },
  ];

  constructor(private financeStateDatasSRV: FinanceStateDataService, private router: Router) {}

  ngOnInit(): void {
    this.getDataAndPatchForm();
  }

  /**
   * Used to reset the form and delete the datas from the service.
   */
  resetData() {
    this.formGroupList.forEach((form) => {
      form.reset();
    });
    this.financeStateDatasSRV.deleteFinanceStateData();
  }

  /**
   * Used to save the form control values in the finance state data service.
   */
  saveData() {
    let responses: FinanceStateData = {
      financialAssets: this.financialAssetsFormGroup.value as FinancialAssetsData,
      incomes: this.incomesFormGroup.value as IncomesData,
      liabilities: this.liabilitiesFormGroup.value as LiabilitiesData,
      physicalAssets: this.physicalAssetsFormGroup.value as PhysicalAssetsData,
    };

    this.financeStateDatasSRV.updateFinanceStateData(responses);
    this.router.navigate(["/results"]);
  }

  /**
   * Used to get the data from the finance state data service and update the form values.
   */
  private getDataAndPatchForm() {
    if (this.financeStateDatasSRV.financeStateData) {
      const FSD = this.financeStateDatasSRV.financeStateData;
      for (let data in FSD.incomes) {
        this.incomesFormGroup.controls[data].setValue(FSD.incomes[data as keyof IncomesData]);
      }
      for (let data in FSD.financialAssets) {
        this.financialAssetsFormGroup.get([data, "assetValue"])?.setValue(FSD.financialAssets[data as keyof FinancialAssetsData].assetValue);
        this.financialAssetsFormGroup.get([data, "changeRate"])?.setValue(FSD.financialAssets[data as keyof FinancialAssetsData].changeRate);
      }
      for (let data in FSD.physicalAssets) {
        this.physicalAssetsFormGroup.get([data, "assetValue"])?.setValue(FSD.physicalAssets[data as keyof PhysicalAssetsData].assetValue);
        this.physicalAssetsFormGroup.get([data, "changeRate"])?.setValue(FSD.physicalAssets[data as keyof PhysicalAssetsData].changeRate);
      }
      for (let data in FSD.liabilities) {
        this.liabilitiesFormGroup.get([data, "assetValue"])?.setValue(FSD.liabilities[data as keyof LiabilitiesData].assetValue);
        this.liabilitiesFormGroup.get([data, "changeRate"])?.setValue(FSD.liabilities[data as keyof LiabilitiesData].changeRate);
        this.liabilitiesFormGroup.get([data, "monthlyPayment"])?.setValue(FSD.liabilities[data as keyof LiabilitiesData].monthlyPayment);
      }
    }
  }
}
