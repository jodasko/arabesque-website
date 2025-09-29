import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  NgxIntlTelInputComponent,
  CountryISO,
  SearchCountryField,
  PhoneNumberFormat,
} from 'ngx-intl-tel-input';

import emailjs from '@emailjs/browser';

import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
})
export class ContactPageComponent {
  contactForm: FormGroup;
  submitted = false;
  submitMessage = '';
  messageLength = 0;
  bgImg = 'about/bg-image.png';
  logoImg = 'assets/images/logo-diapo.png';
  countryISO = CountryISO;
  searchCountryField = SearchCountryField;
  phoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.France];

  // Europe (broad, geographic) — include EU + EEA + UK/CH + Balkans etc.
  EUROPE_ONLY: CountryISO[] = [
    CountryISO.Albania,
    CountryISO.Andorra,
    CountryISO.Armenia,
    CountryISO.Austria,
    CountryISO.Azerbaijan,
    CountryISO.Belarus,
    CountryISO.Belgium,
    CountryISO.BosniaAndHerzegovina,
    CountryISO.Bulgaria,
    CountryISO.Croatia,
    CountryISO.Cyprus,
    CountryISO.CzechRepublic,
    CountryISO.Denmark,
    CountryISO.Estonia,
    CountryISO.Finland,
    CountryISO.France,
    CountryISO.Georgia,
    CountryISO.Germany,
    CountryISO.Greece,
    CountryISO.Hungary,
    CountryISO.Iceland,
    CountryISO.Ireland,
    CountryISO.Italy,
    CountryISO.Kosovo,
    CountryISO.Latvia,
    CountryISO.Liechtenstein,
    CountryISO.Lithuania,
    CountryISO.Luxembourg,
    CountryISO.Malta,
    CountryISO.Moldova,
    CountryISO.Monaco,
    CountryISO.Montenegro,
    CountryISO.Netherlands,
    CountryISO.Macedonia,
    CountryISO.Norway,
    CountryISO.Poland,
    CountryISO.Portugal,
    CountryISO.Romania,
    CountryISO.Russia,
    CountryISO.SanMarino,
    CountryISO.Serbia,
    CountryISO.Slovakia,
    CountryISO.Slovenia,
    CountryISO.Spain,
    CountryISO.Sweden,
    CountryISO.Switzerland,
    CountryISO.Turkey,
    CountryISO.Ukraine,
    CountryISO.UnitedKingdom,
    CountryISO.VaticanCity,
  ];

  // Arab League (Arabic-speaking countries)
  ARAB_LEAGUE_ONLY: CountryISO[] = [
    CountryISO.Algeria,
    CountryISO.Bahrain,
    CountryISO.Comoros,
    CountryISO.Djibouti,
    CountryISO.Egypt,
    CountryISO.Iraq,
    CountryISO.Jordan,
    CountryISO.Kuwait,
    CountryISO.Lebanon,
    CountryISO.Libya,
    CountryISO.Mauritania,
    CountryISO.Morocco,
    CountryISO.Oman,
    CountryISO.Palestine,
    CountryISO.Qatar,
    CountryISO.SaudiArabia,
    CountryISO.Somalia,
    CountryISO.Sudan,
    CountryISO.Syria,
    CountryISO.Tunisia,
    CountryISO.UnitedArabEmirates,
    CountryISO.Yemen,
  ];

  constructor(
    private fb: FormBuilder,
    public analyticsService: AnalyticsService
  ) {
    this.contactForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-zÀ-ÿ]{2,}(?: [A-Za-zÀ-ÿ]{2,})+$/),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      // phone: ['', [Validators.pattern(/^[+]?[\d\s\-().]{7,20}$/)]],
      phone: ['', [Validators.required]],
      company: [''],
      message: [
        '',
        [
          Validators.required,
          Validators.maxLength(400),
          Validators.pattern(/^(\b\w+\b[\s\r\n]*){10,}$/),
        ],
      ],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    const templateParams = {
      title: this.contactForm.value.company
        ? this.contactForm.value.company
        : 'Client',
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone.internationalNumber,
      company: this.contactForm.value.company,
      message: this.contactForm.value.message,
    };
    console.log('Template Params:', templateParams);
    // emailjs
    //   .send(
    //     'service_kc9n16b',
    //     'template_a7zofji',
    //     templateParams,
    //     'P1mQ4aSPIfQS-ZlyS'
    //   )
    //   .then(() => {
    //     this.submitMessage = 'CONTACT_PAGE_MESSAGE_SUBMIT_SUCCESS';
    //     this.contactForm.reset();
    //     this.submitted = false;
    //   })
    //   .catch((error) => {
    //     console.error('EmailJS error:', error);
    //     this.submitMessage = 'CONTACT_PAGE_MESSAGE_SUBMIT_ERROR';
    //   });

    // Email sending will be handled later with backend or OVH integration
    console.log('Form Data:', this.contactForm.value);
    this.submitMessage = 'CONTACT_PAGE_MESSAGE_SUBMIT_SUCCESS';
    this.contactForm.reset();
    this.submitted = false;
  }
}
