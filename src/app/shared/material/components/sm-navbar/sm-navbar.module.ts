import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { SmNavbarComponent } from "./sm-navbar/sm-navbar.component";

@NgModule({
  declarations: [SmNavbarComponent],
  imports: [CommonModule, MatToolbarModule, RouterModule, TranslateModule],
  exports: [SmNavbarComponent],
})
export class SmNavbarModule {}
