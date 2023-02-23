import { NgModule } from "@angular/core";
import { FormPage } from "./form/form.page";
import { CommonModule } from "@angular/common";
import { FormRoutingModule } from "./form-routing.module";

import { StepperModule } from "src/app/shared/material/components/stepper/stepper.module";
import { InputNumberModule } from "src/app/shared/material/inputs/input-number/input-number.module";
import { InputSelectModule } from "src/app/shared/material/inputs/input-select/input-select.module";

@NgModule({
  declarations: [FormPage],
  imports: [CommonModule, FormRoutingModule, InputNumberModule, InputSelectModule, StepperModule],
  exports: [FormPage],
})
export class FormModule {}
