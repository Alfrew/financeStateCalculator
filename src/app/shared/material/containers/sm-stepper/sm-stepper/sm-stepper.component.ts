import { Component, Input, Output, EventEmitter, ContentChild, TemplateRef } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";
import { FormGroup } from "@angular/forms";
import { StepperOrientation } from "@angular/cdk/stepper";
import { map, Observable } from "rxjs";
import { ViewportScroller } from "@angular/common";

@Component({
  selector: "sm-stepper",
  templateUrl: "./sm-stepper.component.html",
  styleUrls: ["./sm-stepper.component.scss"],
})
export class SmStepperComponent {
  @Input() formGroupList: FormGroup[] = [];
  @Input() labelList: string[] = [];
  @ContentChild("content", { static: false }) contentTemplateRef!: TemplateRef<any>;
  @Output() reset: EventEmitter<any> = new EventEmitter<any>();
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private breakpointObserver: BreakpointObserver, private viewportScroller: ViewportScroller) {
    this.stepperOrientation = breakpointObserver.observe("(min-width: 768px)").pipe(map(({ matches }) => (matches ? "horizontal" : "vertical")));
  }

  /**
   * Used to get the last index of the form group list.
   */
  get lastFormGroupListIndex() {
    return this.formGroupList.length - 1;
  }

  /**
   * Used to emit the click event of the reset button to the parent component.
   */
  resetEmitter() {
    this.reset.emit();
  }

  /**
   * Used to scroll to the top of the stepper in vertical view.
   */
  scrollToTop() {
    const element = document.querySelector("#top");
    element?.scrollIntoView({ block: "start", inline: "nearest", behavior: "smooth" });
  }

  /**
   * Used to emit the click event of the submit button to the parent component.
   */
  submitEmitter() {
    this.submit.emit();
  }
}
