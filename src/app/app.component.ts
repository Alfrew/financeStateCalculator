import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { MenuItem } from "./shared/utils/menu-utils";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "fsCalculator";
  languageMenuList: MenuItem[] = [
    { label: "common.language.english", value: "en" },
    { label: "common.language.italian", value: "it" },
  ];

  constructor(private translateSRV: TranslateService) {
    translateSRV.setDefaultLang("en");
    translateSRV.use("en");
  }

  changeLanguage(language: string) {
    this.translateSRV.use(language);
  }
}
