import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { SmTextButtonComponent } from "./sm-text-button/sm-text-button.component";

@NgModule({
  declarations: [SmTextButtonComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, TranslateModule],
  exports: [SmTextButtonComponent],
})
export class SmTextButtonModule {}
