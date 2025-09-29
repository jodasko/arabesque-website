import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';

import { environment } from '../environments/environment';
import { I18nModule } from './i18n/i18n.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LanguageService } from './services/language/language.service';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxGoogleAnalyticsModule.forRoot(environment.trackAnalyticID),
    I18nModule,
    LayoutModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
