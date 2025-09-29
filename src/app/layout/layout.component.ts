import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../services/scroll/scroll.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  constructor(public scrollService: ScrollService) {}
  ngOnInit(): void {
    this.scrollService.getCurrentUrl();
  }

  get displayHeader(): boolean {
    return !(
      this.scrollService.getCurrentUrl() === '/construction' ||
      this.scrollService.getCurrentUrl() === '/contact'
    );
  }

  get displayFooter(): boolean {
    return !(this.scrollService.getCurrentUrl() === '/');
  }
}
