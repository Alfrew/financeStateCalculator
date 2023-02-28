import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatExpansionModule } from "@angular/material/expansion";
import { SmAccordionComponent } from "./sm-accordion/sm-accordion.component";

@NgModule({
  declarations: [SmAccordionComponent],
  imports: [CommonModule, MatExpansionModule],
  exports: [SmAccordionComponent],
})
export class SmAccordionModule {}
