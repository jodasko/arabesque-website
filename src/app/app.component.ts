import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.languageService.initLanguage();
    this.titleService.setTitle('CodeStack Studio');
    this.metaService.addTags([
      {
        name: 'keywords',
        content:
          'web, software, development, developer, france, english, spanish, french, ia, artifial intelligence, design, logiciel, studio, code, stack, devtech, creative, agency',
      },
      {
        name: 'description',
        content:
          'CodeStack DevTeck is a creative software development studio specializing in web and software solutions. We are a team of passionate developers dedicated to delivering high-quality, innovative products that meet the unique needs of our clients.',
      },
    ]);
    AOS.init();
  }
}
