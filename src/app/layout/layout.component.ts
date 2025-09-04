import { Component } from '@angular/core';
import { ScrollService } from '../services/scroll/scroll.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  constructor(public scrollService: ScrollService) {}
}
