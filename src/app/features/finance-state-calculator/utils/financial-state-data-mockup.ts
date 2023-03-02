import { FinanceStateData } from "../models/finance-state-data";

export const FINANCIAL_STATE_DATA_MOCKUP: FinanceStateData = {
  income: { age: 23, employment: 17000, investment: 0, other: 0, expenses: 7500, homeOwner: "false", rent: 0 },
  financialAssets: {
    cash: 35,
    bank: 500,
    emergencyFund: 1000,
    savings: 2100,
    GIC: 0,
    bonds: 0,
    stocks: 0,
    stocksDuration: "4",
    crypto: 1050,
    gold: 0,
    other: 0,

    interests: {
      cash: 0,
      bank: 0,
      emergencyFund: 0,
      savings: 2,
      GIC: 0,
      bonds: 0,
      stocks: 0,
      crypto: 15,
      gold: 0,
      other: 0,
    },
  },
  physicalAssets: {
    vehicle: 16000,
    property: 0,
    equipment: 4000,
    electronics: 2500,
    other: 700,

    interests: {
      vehicle: -15,
      property: 0,
      equipment: -15,
      electronics: -15,
      other: 2,
    },
  },
  liabilities: {
    creditCard: 0,
    creditLine: 0,
    studentLoan1: 5000,
    studentLoan2: 0,
    mortgage: 0,
    carLoan: 15000,
    personalLoan: 0,
    medicalDebt: 0,
    other1: 400,
    other2: 0,
    other3: 0,

    monthlyPayment: {
      creditCard: 0,
      creditLine: 0,
      studentLoan1: 340,
      studentLoan2: 0,
      mortgage: 0,
      carLoan: 190,
      personalLoan: 0,
      medicalDebt: 0,
      other1: 80,
      other2: 0,
      other3: 0,
    },

    interests: {
      creditCard: 0,
      creditLine: 0,
      studentLoan1: 1.43,
      studentLoan2: 0,
      mortgage: 0,
      carLoan: 1,
      personalLoan: 0,
      medicalDebt: 0,
      other1: 0,
      other2: 0,
      other3: 0,
    },
  },
};
