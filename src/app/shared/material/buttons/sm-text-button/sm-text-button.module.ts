import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { SmTextButtonComponent } from "./sm-text-button/sm-text-button.component";

@NgModule({
  declarations: [SmTextButtonComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [SmTextButtonComponent],
})
export class SmTextButtonModule {}
