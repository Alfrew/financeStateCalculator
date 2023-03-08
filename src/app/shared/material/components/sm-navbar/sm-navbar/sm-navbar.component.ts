import { Component, Input } from "@angular/core";
import { matColor } from "src/app/shared/utils/button-utils";

@Component({
  selector: "sm-navbar",
  templateUrl: "./sm-navbar.component.html",
  styleUrls: ["./sm-navbar.component.scss"],
})
export class SmNavbarComponent {
  @Input() color?: matColor;
  @Input() navBrand: string = "";
}
