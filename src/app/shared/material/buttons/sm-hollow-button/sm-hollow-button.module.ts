import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { SmHollowButtonComponent } from "./sm-hollow-button/sm-hollow-button.component";

@NgModule({
  declarations: [SmHollowButtonComponent],
  imports: [CommonModule, MatButtonModule, MatBadgeModule, MatTooltipModule, MatIconModule, TranslateModule],
  exports: [SmHollowButtonComponent],
})
export class SmHollowButtonModule {}
