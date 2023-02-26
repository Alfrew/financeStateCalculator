import { Component, Input, OnInit, ContentChild, TemplateRef } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "sm-stepper",
  templateUrl: "./sm-stepper.component.html",
  styleUrls: ["./sm-stepper.component.scss"],
})
export class SmStepperComponent implements OnInit {
  @Input() formGroups: FormGroup[] = [];
  @Input() labels: string[] = [];
  @ContentChild("content", { static: false }) contentTemplateRef!: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}
}
