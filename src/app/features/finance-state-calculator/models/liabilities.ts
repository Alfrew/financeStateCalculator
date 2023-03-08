import { AssetFSC } from "./asset-fsc";

export interface LiabilityFSC extends AssetFSC {
  monthlyPayment: number;
}

export interface LiabilitiesData {
  carLoan: LiabilityFSC;
  creditCard: LiabilityFSC;
  creditLine: LiabilityFSC;
  medicalDebt: LiabilityFSC;
  mortgage: LiabilityFSC;
  other1: LiabilityFSC;
  other2: LiabilityFSC;
  other3: LiabilityFSC;
  personalLoan: LiabilityFSC;
  studentLoan1: LiabilityFSC;
  studentLoan2: LiabilityFSC;
}
