import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { InputSelectFunctions, InputSelectOption, InputSelectOptionsGroup } from "../shared/utils/input-select-utils";

@Component({
  selector: "page-test",
  template: `
    <form [formGroup]="form">
      <app-input-select formControlName="select" [optionList]="optionList" [multipleLimit]="2" placeholder="Select some food"></app-input-select>
      <app-input-select formControlName="selectGroup" [groupedOptionList]="optionGroupsList" [multipleLimit]="6" placeholder="Select six pokemons"></app-input-select>
    </form>
  `,
  styles: [],
})
export class TestPage implements OnInit {
  optionList: InputSelectOption[] = InputSelectFunctions.returnOptionList(LIST_MOCKUP, "id", "label");
  optionGroupsList: InputSelectOptionsGroup[] = InputSelectFunctions.returnOptionsGroupList(LIST_GROUP_MOCKUP, "type", "pokemons", "id", "label");

  form: FormGroup = new FormGroup({
    select: new FormControl(""),
    selectGroup: new FormControl(""),
  });

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}

export const LIST_MOCKUP = [
  { id: "steak-0", label: "Steak" },
  { id: "pizza-1", label: "Pizza" },
  { id: "tacos-2", label: "Tacos" },
];

export const LIST_GROUP_MOCKUP = [
  {
    type: "Grass",
    pokemons: [
      { id: "bulbasaur-0", label: "Bulbasaur" },
      { id: "oddish-1", label: "Oddish" },
      { id: "bellsprout-2", label: "Bellsprout" },
    ],
  },
  {
    type: "Water",
    pokemons: [
      { id: "squirtle-3", label: "Squirtle" },
      { id: "psyduck-4", label: "Psyduck" },
      { id: "horsea-5", label: "Horsea" },
    ],
  },
  {
    type: "Fire",
    disabled: true,
    pokemons: [
      { id: "charmander-6", label: "Charmander" },
      { id: "vulpix-7", label: "Vulpix" },
      { id: "flareon-8", label: "Flareon" },
    ],
  },
  {
    type: "Psychic",
    pokemons: [
      { id: "mew-9", label: "Mew" },
      { id: "mewtwo-10", label: "Mewtwo" },
    ],
  },
];
