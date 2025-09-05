import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import * as AOS from 'aos';

import { LanguageService } from 'src/app/services/language/language.service';
import { SeoService } from './core/seo/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private seoService: SeoService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.languageService.initLanguage();
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map(() => {
          let r = this.activatedRoute;
          while (r.firstChild) r = r.firstChild;
          return r;
        }),
        mergeMap((r) => r.data)
      )
      .subscribe((data) => this.seoService.set(data['seo']));
    // this.titleService.setTitle('CodeStack Studio');
    // this.metaService.addTags([
    //   {
    //     name: 'keywords',
    //     content:
    //       'web, software, development, developer, france, english, spanish, french, ia, artifial intelligence, design, logiciel, studio, code, stack, devtech, creative, agency',
    //   },
    //   {
    //     name: 'description',
    //     content:
    //       'CodeStack DevTeck is a creative software development studio specializing in web and software solutions. We are a team of passionate developers dedicated to delivering high-quality, innovative products that meet the unique needs of our clients.',
    //   },
    // ]);
    AOS.init();
  }
}
