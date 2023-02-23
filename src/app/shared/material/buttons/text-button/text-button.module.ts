import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { TextButtonComponent } from "./text-button/text-button.component";

@NgModule({
  declarations: [TextButtonComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [TextButtonComponent],
})
export class TextButtonModule {}
