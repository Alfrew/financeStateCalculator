import { NgModule } from "@angular/core";
import { FscFormPage } from "./fsc-form/fsc-form.page";
import { CommonModule } from "@angular/common";
import { FscFormRoutingModule } from "./fsc-form-routing.module";

import { SmStepperModule } from "src/app/shared/material/containers/sm-stepper/sm-stepper.module";
import { SmInputNumberModule } from "src/app/shared/material/inputs/sm-input-number/sm-input-number.module";
import { SmInputSelectModule } from "src/app/shared/material/inputs/sm-input-select/sm-input-select.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [FscFormPage],
  imports: [CommonModule, FscFormRoutingModule, SmInputNumberModule, SmInputSelectModule, SmStepperModule, TranslateModule],
  exports: [FscFormPage],
})
export class FscFormModule {}
