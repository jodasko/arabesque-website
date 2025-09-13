import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionGalleryComponent } from './section-gallery.component';

describe('BannerComponent', () => {
  let component: SectionGalleryComponent;
  let fixture: ComponentFixture<SectionGalleryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SectionGalleryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
