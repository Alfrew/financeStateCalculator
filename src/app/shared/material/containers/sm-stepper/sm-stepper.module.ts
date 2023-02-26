import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatStepperModule } from "@angular/material/stepper";
import { SmStepperComponent } from "./sm-stepper/sm-stepper.component";

@NgModule({
  declarations: [SmStepperComponent],
  imports: [CommonModule, MatStepperModule, MatButtonModule],
  exports: [SmStepperComponent],
})
export class SmStepperModule {}
