import { Injectable } from "@angular/core";
import { FinanceStateData } from "../models/finance-state-data";

@Injectable({
  providedIn: "root",
})
export class FinanceStateDataService {
  private _financeStateData?: FinanceStateData;

  constructor() {}

  /**
   * Used to update the finance state datas in the service.
   * @param datas the datas that will overwrite the finance state datas in the service.
   */
  updateFinanceStateData(data: FinanceStateData) {
    this._financeStateData = data;
  }

  /**
   * Used to get the finance state datas from the service.
   */
  get financeStateData() {
    return this._financeStateData;
  }
}
