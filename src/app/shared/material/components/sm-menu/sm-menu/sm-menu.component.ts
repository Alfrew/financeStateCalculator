import { MenuItem } from "src/app/shared/utils/menu-utils";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { buttonType, matColor } from "src/app/shared/utils/button-utils";

@Component({
  selector: "sm-menu",
  templateUrl: "./sm-menu.component.html",
  styleUrls: ["./sm-menu.component.scss"],
})
export class SmMenuComponent {
  @Input() buttonType: buttonType = "icon";
  @Input() buttonColor?: matColor;
  @Input() buttonBadge?: number;
  @Input() buttonBadgeColor: matColor = "warn";
  @Input() buttonIcon: string = "";
  @Input() buttonLabel: string = "";
  @Input() buttonTooltip: string = "";
  @Input() menuItemList: MenuItem[] = [];
  @Output() itemAction: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Used to emit the menu item value to the parent component when clicked.
   * @param value the string that will be emitted with the event.
   */
  itemActionEmitter(value: string) {
    this.itemAction.emit(value);
  }
}
