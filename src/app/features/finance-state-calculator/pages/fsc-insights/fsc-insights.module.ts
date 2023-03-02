import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FscInsightsPage } from "./fsc-insights/fsc-insights.page";
import { FscInsightsRoutingModule } from "./fsc-insights-routing.module";
import { PriorityInsightsComponent } from "./components/prioritiy-insights/priority-insights.component";
import { FinancialPositionInsightsComponent } from "./components/financial-position-insights/financial-position-insights.component";

import { SmAccordionModule } from "src/app/shared/material/containers/sm-accordion/sm-accordion.module";
import { DebtInsightsComponent } from "./components/debt-insights/debt-insights.component";
import { InvestmentInsightsComponent } from "./components/investment-insights/investment-insights.component";

@NgModule({
  declarations: [FscInsightsPage, PriorityInsightsComponent, FinancialPositionInsightsComponent, DebtInsightsComponent, InvestmentInsightsComponent],
  imports: [CommonModule, FscInsightsRoutingModule, SmAccordionModule],
})
export class FscInsightsModule {}
