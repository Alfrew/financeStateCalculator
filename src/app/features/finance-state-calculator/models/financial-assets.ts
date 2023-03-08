import { AssetFSC } from "./asset-fsc";

export interface StocksFSC extends AssetFSC {
  duration: string;
}
export interface FinancialAssetsData {
  bank: AssetFSC;
  bonds: AssetFSC;
  cash: AssetFSC;
  crypto: AssetFSC;
  emergencyFund: AssetFSC;
  GIC: AssetFSC;
  gold: AssetFSC;
  other: AssetFSC;
  savings: AssetFSC;
  stocks: StocksFSC;
}
