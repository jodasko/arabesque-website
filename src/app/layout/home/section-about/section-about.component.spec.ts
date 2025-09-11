import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Section2Component } from './section-about.component';

describe('BannerComponent', () => {
  let component: Section2Component;
  let fixture: ComponentFixture<Section2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Section2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
