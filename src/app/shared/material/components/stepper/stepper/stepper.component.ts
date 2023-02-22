import { Component, Input, OnInit, ContentChild, TemplateRef } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"],
})
export class StepperComponent implements OnInit {
  @Input() formGroups: FormGroup[] = [];
  @Input() labels: string[] = [];
  @ContentChild("content", { static: false }) contentTemplateRef!: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}
}
