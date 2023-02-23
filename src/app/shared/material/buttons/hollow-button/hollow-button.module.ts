import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { HollowButtonComponent } from "./hollow-button/hollow-button.component";

@NgModule({
  declarations: [HollowButtonComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [HollowButtonComponent],
})
export class HollowButtonModule {}
