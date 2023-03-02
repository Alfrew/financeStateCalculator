import { Injectable } from "@angular/core";

const PREFIX: string = "FSC_";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  constructor() {}

  /**
   * Used to clear completely the local storage.
   */
  clearLocalStorage(): void {
    window.localStorage.clear();
  }

  /**
   * Used to delete a specific element from the local storage.
   * @param key the string key that represent the element.
   */
  deleteFromLocalStorage(key: string): void {
    window.localStorage.removeItem(PREFIX + key);
  }

  /**
   * Used to get a specific element form the local storage.
   * @param key the string key that represent the element.
   * @returns the selected object if found, or null if not.
   */
  getFromLocalStorage(key: string): any | null {
    let data = window.localStorage.getItem(PREFIX + key);
    if (data) {
      return JSON.parse(data);
    }
    console.warn(`Element with key: '${PREFIX + key}' not found`);
    return null;
  }

  /**
   * Used to save, or update, an element in the local storage.
   * @param key the string key that represent the element.
   * @param data the element that will be saved in the local storage.
   */
  setInLocalStorage(key: string, data: any): void {
    window.localStorage.setItem(PREFIX + key, JSON.stringify(data));
  }

  /* CREATED BY ANDREA, NOT SURE IF NEEDED */
  // public getToken(): any {
  //   return this.getInfo(TOKEN_NAME);
  // }

  // public saveToken(data: any): any {
  //   return this.saveInfo(TOKEN_NAME, data);
  // }

  // public deleteToken(): any {
  //   return this.deleteInfo(TOKEN_NAME);
  // }
}
