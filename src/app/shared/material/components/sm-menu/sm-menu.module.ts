import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatMenuModule } from "@angular/material/menu";
import { SmMenuComponent } from "./sm-menu/sm-menu.component";
import { TranslateModule } from "@ngx-translate/core";
import { MatIconModule } from "@angular/material/icon";
import { SmFlatButtonModule } from "../../buttons/sm-flat-button/sm-flat-button.module";
import { SmHollowButtonModule } from "../../buttons/sm-hollow-button/sm-hollow-button.module";
import { SmIconButtonModule } from "../../buttons/sm-icon-button/sm-icon-button.module";
import { SmTextButtonModule } from "../../buttons/sm-text-button/sm-text-button.module";

@NgModule({
  declarations: [SmMenuComponent],
  imports: [CommonModule, MatMenuModule, MatIconModule, TranslateModule, SmFlatButtonModule, SmHollowButtonModule, SmIconButtonModule, SmTextButtonModule],
  exports: [SmMenuComponent],
})
export class SmMenuModule {}
