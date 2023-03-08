import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SmInputTextComponent } from "./sm-input-text/sm-input-text.component";

@NgModule({
  declarations: [SmInputTextComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, TranslateModule],
  exports: [SmInputTextComponent, ReactiveFormsModule],
})
export class SmInputTextModule {}
