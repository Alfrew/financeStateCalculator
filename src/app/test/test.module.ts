import { TestPage } from "./test.page";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestRoutingModule } from "./test-routing.module";

import { InputSelectModule } from "../shared/material/inputs/input-select/input-select.module";

@NgModule({
  declarations: [TestPage],
  imports: [CommonModule, TestRoutingModule, InputSelectModule],
  exports: [TestPage],
})
export class TestModule {}
