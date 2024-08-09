import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  actualLang: string = 'en';

  public switchLanguage(language: string): void {
    this.actualLang = language;
    this.translate.use(language);
  }
}
