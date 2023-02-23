import { matColor } from "src/app/shared/utils/button-utils";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "shared-mat-text-button",
  templateUrl: "./text-button.component.html",
  styleUrls: ["./text-button.component.scss"],
})
export class TextButtonComponent {
  @Input() label: string = "";
  @Input() icon!: string;
  @Input() isDisabled: boolean = false;
  @Input() color: matColor = "";
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Used to emit the click event of the button to the parent component.
   */
  buttonClickEmitter() {
    this.buttonClick.emit();
  }
}
