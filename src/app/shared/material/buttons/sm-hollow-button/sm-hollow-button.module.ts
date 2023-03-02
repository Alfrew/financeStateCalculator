import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { SmHollowButtonComponent } from "./sm-hollow-button/sm-hollow-button.component";

@NgModule({
  declarations: [SmHollowButtonComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, TranslateModule],
  exports: [SmHollowButtonComponent],
})
export class SmHollowButtonModule {}
