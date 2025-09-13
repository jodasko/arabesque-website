import { Component } from '@angular/core';

@Component({
  selector: 'app-section-gallery',
  templateUrl: './section-gallery.component.html',
  styleUrls: ['./section-gallery.component.scss'],
})
export class SectionGalleryComponent {
  title = 'GALLERY_TITLE';
  selectedImage: any = null;
  galleryData = 'GALLERY_IMAGES_DETAILS';
  hoveredIndex: number | null = null;
  hoveredMember = this.galleryData[0];

  constructor() {}
  ngOnInit(): void {}

  resolveImage(value: string): string {
    return `/assets/images/gallery/` + value;
  }

  onHover(image: any) {
    this.selectedImage = image;
  }

  onLeave() {
    this.selectedImage = null;
  }
}
