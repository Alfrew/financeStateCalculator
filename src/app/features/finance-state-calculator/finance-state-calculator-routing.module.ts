import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./pages/fsc-form/fsc-form.module").then((m) => m.FscFormModule),
  },
  {
    path: "results",
    loadChildren: () => import("./pages/fsc-insights/fsc-insights.module").then((m) => m.FscInsightsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceStateCalculatorRoutingModule {}
