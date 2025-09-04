import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSection1Component } from './page-section1.component';

describe('ApproachExperienceComponent', () => {
  let component: PageSection1Component;
  let fixture: ComponentFixture<PageSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSection1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(PageSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
