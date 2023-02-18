import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputSelectComponent } from "./input-select/input-select.component";

@NgModule({
  declarations: [InputSelectComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatSelectModule],
  exports: [InputSelectComponent, ReactiveFormsModule],
})
export class InputSelectModule {}
