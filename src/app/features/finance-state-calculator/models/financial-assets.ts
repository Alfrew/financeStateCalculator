export interface FinancialAssetsBase {
  cash: number;
  bank: number;
  emergencyFund: number;
  savings: number;
  GIC: number;
  bonds: number;
  stocks: number;
  crypto: number;
  gold: number;
  other: number;
}

export interface FinancialAssets extends FinancialAssetsBase {
  stocksDuration: string;
  interests: FinancialAssetsBase;
}
