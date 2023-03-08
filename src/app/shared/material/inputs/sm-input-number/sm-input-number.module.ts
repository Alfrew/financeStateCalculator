import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SmInputNumberComponent } from "./sm-input-number/sm-input-number.component";

@NgModule({
  declarations: [SmInputNumberComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, TranslateModule],
  exports: [SmInputNumberComponent, ReactiveFormsModule],
})
export class SmInputNumberModule {}
