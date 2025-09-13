import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionWorkComponent } from './section-work.component';

describe('JobsComponent', () => {
  let component: SectionWorkComponent;
  let fixture: ComponentFixture<SectionWorkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SectionWorkComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
