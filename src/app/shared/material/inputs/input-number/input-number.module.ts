import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputNumberComponent } from "./input-number/input-number.component";

@NgModule({
  declarations: [InputNumberComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule],
  exports: [InputNumberComponent, ReactiveFormsModule],
})
export class InputNumberModule {}
