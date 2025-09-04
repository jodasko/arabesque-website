import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageSection2Component } from './page-section2.component';

describe('ProyectsComponent', () => {
  let component: PageSection2Component;
  let fixture: ComponentFixture<PageSection2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PageSection2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
