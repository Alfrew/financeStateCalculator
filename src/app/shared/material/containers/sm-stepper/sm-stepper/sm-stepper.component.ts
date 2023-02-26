import { Component, Input, Output, EventEmitter, ContentChild, TemplateRef } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "sm-stepper",
  templateUrl: "./sm-stepper.component.html",
  styleUrls: ["./sm-stepper.component.scss"],
})
export class SmStepperComponent {
  @Input() formGroups: FormGroup[] = [];
  @Input() labels: string[] = [];
  @ContentChild("content", { static: false }) contentTemplateRef!: TemplateRef<any>;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  /**
   * Used to get the last index of the form group list.
   */
  get lastFormGroupsIndex() {
    return this.formGroups.length - 1;
  }

  /**
   * Used to emit the click event of the submit button to the parent component.
   */
  submitEmitter() {
    this.submit.emit();
  }
}
