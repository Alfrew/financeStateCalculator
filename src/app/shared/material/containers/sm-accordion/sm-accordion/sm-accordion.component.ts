import { Component, Input } from "@angular/core";
import { Panel } from "src/app/shared/utils/panel-utils";

@Component({
  selector: "sm-accordion",
  templateUrl: "./sm-accordion.component.html",
  styleUrls: ["./sm-accordion.component.scss"],
})
export class SmAccordionComponent {
  @Input() panelList: Panel[] = [];
}
