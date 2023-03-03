import { matColor } from "src/app/shared/utils/button-utils";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "sm-hollow-button",
  templateUrl: "./sm-hollow-button.component.html",
  styleUrls: ["./sm-hollow-button.component.scss"],
})
export class SmHollowButtonComponent {
  @Input() badgeColor: matColor = "warn";
  @Input() badgeValue?: number;
  @Input() color?: matColor;
  @Input() icon?: string;
  @Input() isDisabled: boolean = false;
  @Input() label: string = "";
  @Input() tooltip: string = "";
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Used to emit the click event of the button to the parent component.
   */
  buttonClickEmitter() {
    this.buttonClick.emit();
  }
}
