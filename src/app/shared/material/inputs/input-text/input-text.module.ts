import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextComponent } from "./input-text/input-text.component";

@NgModule({
  declarations: [InputTextComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule],
  exports: [InputTextComponent, ReactiveFormsModule],
})
export class InputTextModule {}
