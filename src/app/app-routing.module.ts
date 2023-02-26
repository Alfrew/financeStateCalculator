import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "test", loadChildren: () => import("./test/test.module").then((m) => m.TestModule) },
  {
    path: "",
    loadChildren: () => import("./features/finance-state-calculator/finance-state-calculator.module").then((m) => m.FinanceStateCalculatorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
