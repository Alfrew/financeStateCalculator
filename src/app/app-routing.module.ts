import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "test", loadChildren: () => import("./test/test.module").then((m) => m.TestModule) },
  { path: "form", loadChildren: () => import("./pages/form/form.module").then((m) => m.FormModule) },
  { path: 'finance-state-calculator', loadChildren: () => import('./finance-state-calculator/finance-state-calculator.module').then(m => m.FinanceStateCalculatorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
