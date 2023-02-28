import { Incomes } from "./incomes";
import { Liabilities } from "./liabilities";
import { PhysicalAssets } from "./physical-assets";
import { FinancialAssets } from "./financial-assets";

export interface FinanceStateData {
  financialAssets: FinancialAssets;
  income: Incomes;
  liabilities: Liabilities;
  physicalAssets: PhysicalAssets;
}
