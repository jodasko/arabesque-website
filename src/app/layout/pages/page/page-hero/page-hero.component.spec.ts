import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1HeroComponent } from './page-hero.component';

describe('HeroExperienceComponent', () => {
  let component: Page1HeroComponent;
  let fixture: ComponentFixture<Page1HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page1HeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Page1HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
