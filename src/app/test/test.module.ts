import { TestPage } from "./test.page";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestRoutingModule } from "./test-routing.module";

// import { SmInputSelectModule } from "../shared/material/inputs/sm-input-select/sm-input-select.module";
// import { SmInputTextModule } from "../shared/material/inputs/sm-input-text/sm-input-text.module";
// import { SmInputNumberModule } from "../shared/material/inputs/sm-input-number/sm-input-number.module";
import { SmFlatButtonModule } from "../shared/material/buttons/sm-flat-button/sm-flat-button.module";

@NgModule({
  declarations: [TestPage],
  imports: [CommonModule, TestRoutingModule, SmFlatButtonModule],
  exports: [TestPage],
})
export class TestModule {}
