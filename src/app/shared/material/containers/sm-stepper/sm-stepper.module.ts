import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { MatButtonModule } from "@angular/material/button";
import { MatStepperModule } from "@angular/material/stepper";
import { SmStepperComponent } from "./sm-stepper/sm-stepper.component";

@NgModule({
  declarations: [SmStepperComponent],
  imports: [CommonModule, MatStepperModule, MatButtonModule, TranslateModule],
  exports: [SmStepperComponent],
})
export class SmStepperModule {}
