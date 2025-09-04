import { Component } from '@angular/core';

interface item {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss'],
})
export class Section2Component {
  /**
   * Placeholder items for the thumbnail gallery
   */
  readonly items: item[] = [{}, {}, {}, {}].map((_, i) => ({
    src: `https://via.placeholder.com/600x400?text=Thumbnail+${i + 1}`,
    alt: `Thumbnail ${i + 1}`,
  }));

  /** Break the works into columns of 2 items each */
  get columns(): item[][] {
    const cols: item[][] = [];
    for (let i = 0; i < this.items.length; i += 2) {
      cols.push(this.items.slice(i, i + 2));
    }
    return cols;
  }
}
