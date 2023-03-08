import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { FscInsightsPage } from "./fsc-insights/fsc-insights.page";
import { FscInsightsRoutingModule } from "./fsc-insights-routing.module";
import { DebtInsightsComponent } from "./components/debt-insights/debt-insights.component";
import { SmAccordionModule } from "src/app/shared/material/containers/sm-accordion/sm-accordion.module";
import { PriorityInsightsComponent } from "./components/prioritiy-insights/priority-insights.component";
import { InvestmentInsightsComponent } from "./components/investment-insights/investment-insights.component";
import { FinancialPositionInsightsComponent } from "./components/financial-position-insights/financial-position-insights.component";

@NgModule({
  declarations: [FscInsightsPage, PriorityInsightsComponent, FinancialPositionInsightsComponent, DebtInsightsComponent, InvestmentInsightsComponent],
  imports: [CommonModule, FscInsightsRoutingModule, SmAccordionModule, TranslateModule],
})
export class FscInsightsModule {}
