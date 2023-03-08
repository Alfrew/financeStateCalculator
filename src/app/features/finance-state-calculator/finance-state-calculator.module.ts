import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FinanceStateDataService } from "./services/finance-state-data.service";
import { FinanceStateCalculatorRoutingModule } from "./finance-state-calculator-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, FinanceStateCalculatorRoutingModule],
  providers: [FinanceStateDataService],
  exports: [],
})
export class FinanceStateCalculatorModule {}
