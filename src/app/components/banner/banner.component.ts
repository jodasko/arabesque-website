import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'banner-component',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  @Input() bgImage: string = '';
  @Input() imageExt: 'jpg' | 'png' = 'jpg';
  @Input() title: string[] = [];
  @Input() subTitle: string = '';
  @Input() isUnderConstruction?: boolean = false;
  @Input() underConstructionText?: string = '';
}
