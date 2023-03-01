import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { SmAccordionComponent } from "./sm-accordion/sm-accordion.component";

@NgModule({
  declarations: [SmAccordionComponent],
  imports: [CommonModule, MatExpansionModule, TranslateModule],
  exports: [SmAccordionComponent],
})
export class SmAccordionModule {}
