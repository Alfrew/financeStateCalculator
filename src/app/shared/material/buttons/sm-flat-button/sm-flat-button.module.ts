import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { SmFlatButtonComponent } from "./sm-flat-button/sm-flat-button.component";

@NgModule({
  declarations: [SmFlatButtonComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [SmFlatButtonComponent],
})
export class SmFlatButtonModule {}
