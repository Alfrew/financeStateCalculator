import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FscInsightsPage } from "./fsc-insights/fsc-insights.page";

const routes: Routes = [{ path: "", component: FscInsightsPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FscInsightsRoutingModule {}
