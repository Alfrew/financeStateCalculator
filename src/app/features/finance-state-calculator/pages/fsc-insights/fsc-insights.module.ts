import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FscInsightsPage } from "./fsc-insights/fsc-insights.page";
import { FscInsightsRoutingModule } from "./fsc-insights-routing.module";
import { PrioritiesInsightsComponent } from "./components/priorities-insights/priorities-insights.component";
import { FinancialPositionInsightsComponent } from "./components/financial-position-insights/financial-position-insights.component";

import { SmAccordionModule } from "src/app/shared/material/containers/sm-accordion/sm-accordion.module";

@NgModule({
  declarations: [FscInsightsPage, PrioritiesInsightsComponent, FinancialPositionInsightsComponent],
  imports: [CommonModule, FscInsightsRoutingModule, SmAccordionModule],
})
export class FscInsightsModule {}
