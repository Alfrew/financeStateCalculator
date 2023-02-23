import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatStepperModule } from "@angular/material/stepper";
import { StepperComponent } from "./stepper/stepper.component";
import { FlatButtonModule } from "../../buttons/flat-button/flat-button.module";

@NgModule({
  declarations: [StepperComponent],
  imports: [CommonModule, MatStepperModule, FlatButtonModule],
  exports: [StepperComponent],
})
export class StepperModule {}
