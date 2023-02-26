import { TestPage } from "./test.page";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestRoutingModule } from "./test-routing.module";

// import { InputSelectModule } from "../shared/material/inputs/input-select/input-select.module";
// import { InputTextModule } from "../shared/material/inputs/input-text/input-text.module";
// import { InputNumberModule } from "../shared/material/inputs/input-number/input-number.module";
import { MatFlatButtonModule } from "../shared/material/buttons/flat-button/mat-flat-button.module";

@NgModule({
  declarations: [TestPage],
  imports: [CommonModule, TestRoutingModule, MatFlatButtonModule],
  exports: [TestPage],
})
export class TestModule {}
