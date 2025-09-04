import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      phone: ['', [Validators.pattern(/^[+]?[\d\s\-().]{7,20}$/)]],
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
      phone: this.contactForm.value.phone,
      company: this.contactForm.value.company,
      message: this.contactForm.value.message,
    };

    emailjs
      .send(
        'service_kc9n16b',
        'template_a7zofji',
        templateParams,
        'P1mQ4aSPIfQS-ZlyS'
      )
      .then(() => {
        this.submitMessage = 'CONTACT_PAGE_MESSAGE_SUBMIT_SUCCESS';
        this.contactForm.reset();
        this.submitted = false;
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        this.submitMessage = 'CONTACT_PAGE_MESSAGE_SUBMIT_ERROR';
      });

    // Email sending will be handled later with backend or OVH integration
    // console.log('Form Data:', this.contactForm.value);
    this.submitMessage = 'CONTACT_PAGE_MESSAGE_SUBMIT_SUCCESS';
    this.contactForm.reset();
    this.submitted = false;
  }
}
