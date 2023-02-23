import { Component, forwardRef, Host, Input, Optional, OnInit, SkipSelf } from "@angular/core";
import { InputSelectOption, InputSelectOptionsGroup } from "src/app/shared/utils/input-select-utils";
import { NG_VALUE_ACCESSOR, ControlContainer, FormControl, ControlValueAccessor } from "@angular/forms";

@Component({
  selector: "shared-mat-input-select",
  templateUrl: "./input-select.component.html",
  styleUrls: ["./input-select.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSelectComponent),
      multi: true,
    },
  ],
})
export class InputSelectComponent implements OnInit, ControlValueAccessor {
  @Input() formControlName!: string;
  @Input() optionList: InputSelectOption[] = [];
  @Input() groupedOptionList?: InputSelectOptionsGroup[];

  @Input() label: string = "";
  @Input() placeholder: string = "common.select.placeholder";
  @Input() multipleLimit?: number;
  @Input() isMultiple: boolean = false;
  @Input() hasClearOption: boolean = false;

  formControl!: FormControl;

  constructor(
    @Optional()
    @Host()
    @SkipSelf()
    private controlContainer: ControlContainer
  ) {}

  ngOnInit() {
    this.formControlCreator();
    this.checkHasMultipleLimit();
  }
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState(isDisabled: boolean): void {}

  /**
   * Create a formControl instance from the parent form group.
   * @TODO Create a service and put this inside, so it can be used from other shared components.
   */
  formControlCreator() {
    if (this.formControlName) {
      if (this.controlContainer) {
        this.formControl = this.controlContainer.control!.get(this.formControlName)! as FormControl;
      } else {
        console.error("Can't find parent FormGroup directive");
      }
    }
  }

  /**
   * Used to enable the multiple selection if `multipleLimit` has a value.
   */
  checkHasMultipleLimit() {
    this.isMultiple = !!this.multipleLimit;
  }

  /**
   * Used in `multiSelectInputs` to disable all the options that are not selected when the `multipleLimit` is reached.
   * @param optionValue the option value that will be checked and (maybe) disabled.
   * @returns a boolean, `true` if the `optionValue` is not part of the checked values and the
   * `multipleLimit` has been reached, `false` if one of the previous conditions is not valid.
   */
  isOptionDisabled(optionValue: any): boolean {
    if (this.isMultiple && this.formControl.value && !!this.multipleLimit) {
      return this.formControl.value.length >= this.multipleLimit && !this.formControl.value.find((value: any) => value == optionValue);
    } else {
      return false;
    }
  }
}
