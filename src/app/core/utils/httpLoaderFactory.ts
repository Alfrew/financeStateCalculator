import { HttpClient } from '@angular/common/http';
import { WebApiTranslateLoader } from './webApiTranslateLoader';

export function HttpLoaderFactory(http: HttpClient) {
  return new WebApiTranslateLoader(http);
}
