import { IncomesData } from "./incomes";
import { LiabilitiesData } from "./liabilities";
import { PhysicalAssetsData } from "./physical-assets";
import { FinancialAssetsData } from "./financial-assets";

export interface FinanceStateData {
  financialAssets: FinancialAssetsData;
  incomes: IncomesData;
  liabilities: LiabilitiesData;
  physicalAssets: PhysicalAssetsData;
}
