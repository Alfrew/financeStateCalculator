import { Injectable } from "@angular/core";
import { FinanceStateData } from "../models/finance-state-data";
import { LocalStorageService } from "src/app/core/services/local-storage.service";

@Injectable()
export class FinanceStateDataService {
  private _financeStateData?: FinanceStateData;
  private _keyFSD: string = "FSD";

  constructor(private localStorageSRV: LocalStorageService) {}

  /**
   * Used to delete the finance state datas in the service and local storage.
   */
  deleteFinanceStateData(): void {
    this._financeStateData = undefined;
    this.localStorageSRV.deleteFromLocalStorage(this._keyFSD);
  }

  /**
   * Used to update the finance state datas in the service and local storage.
   * @param datas the datas that will overwrite the finance state datas in the service.
   */
  updateFinanceStateData(data: FinanceStateData): void {
    this._financeStateData = data;
    this.localStorageSRV.setInLocalStorage(this._keyFSD, data);
  }

  /**
   * Used to get the finance state datas from the service or local storage.
   */
  get financeStateData(): FinanceStateData | undefined {
    if (!this._financeStateData) {
      this._financeStateData = this.localStorageSRV.getFromLocalStorage(this._keyFSD);
    }
    if (this._financeStateData) {
      return this._financeStateData;
    }
    return undefined;
  }

  /**
   * Used to get the local storage key for the finance state data from the service.
   */
  get keyFSD(): string {
    return this._keyFSD;
  }
}
