import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionAboutComponent } from './section-about.component';

describe('BannerComponent', () => {
  let component: SectionAboutComponent;
  let fixture: ComponentFixture<SectionAboutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SectionAboutComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
