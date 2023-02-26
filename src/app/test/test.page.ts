import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { InputSelectFunctions, InputSelectOption, InputSelectOptionsGroup } from "../shared/utils/input-select-utils";

@Component({
  selector: "page-test",
  template: ` <sm-flat-button (buttonClick)="logger()" [isDisabled]="true" color="primary" label="Bottone"></sm-flat-button> `,
  styles: [],
})
export class TestPage implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  /**
   * Used for event emitter testing.
   * @param value
   */
  logger(value?: any) {
    console.warn(value ?? "Logged");
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
