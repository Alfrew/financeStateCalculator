import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FscFormPage } from "./fsc-form/fsc-form.page";

const routes: Routes = [{ path: "", component: FscFormPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FscFormRoutingModule {}
