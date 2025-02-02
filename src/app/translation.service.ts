import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
  }

  actualLang: string = 'de';

  public switchLanguage(language: string): void {
    this.actualLang = language;
    this.translate.use(language);
  }
}
