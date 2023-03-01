export interface LiabilitiesBase {
  creditCard: number;
  creditLine: number;
  studentLoan1: number;
  studentLoan2: number;
  mortgage: number;
  carLoan: number;
  personalLoan: number;
  medicalDebt: number;
  other1: number;
  other2: number;
  other3: number;
}

export interface Liabilities extends LiabilitiesBase {
  interests: LiabilitiesBase;
  monthlyPayment: LiabilitiesBase;
}
