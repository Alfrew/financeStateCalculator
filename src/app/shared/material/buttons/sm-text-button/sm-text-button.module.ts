import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { SmTextButtonComponent } from "./sm-text-button/sm-text-button.component";

@NgModule({
  declarations: [SmTextButtonComponent],
  imports: [CommonModule, MatButtonModule, MatBadgeModule, MatTooltipModule, MatIconModule, TranslateModule],
  exports: [SmTextButtonComponent],
})
export class SmTextButtonModule {}
