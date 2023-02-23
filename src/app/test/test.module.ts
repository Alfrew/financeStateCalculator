import { TestPage } from "./test.page";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestRoutingModule } from "./test-routing.module";

// import { InputSelectModule } from "../shared/material/inputs/input-select/input-select.module";
import { FlatButtonModule } from "../shared/material/buttons/flat-button/flat-button.module";

@NgModule({
  declarations: [TestPage],
  imports: [CommonModule, TestRoutingModule, FlatButtonModule],
  exports: [TestPage],
})
export class TestModule {}
