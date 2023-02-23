import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { FlatButtonComponent } from "./flat-button/flat-button.component";

@NgModule({
  declarations: [FlatButtonComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [FlatButtonComponent],
})
export class FlatButtonModule {}
