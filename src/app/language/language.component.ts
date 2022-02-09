import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  // title = 'change-language';



  constructor(public translate: TranslateService) {
    translate.addLangs(['en-US', 'fr-FR']);
    translate.setDefaultLang('en-US');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/fr|fr-FR/) ? 'fr-FR' : 'en-US');
  }
  ngOnInit(): void {
  }
}