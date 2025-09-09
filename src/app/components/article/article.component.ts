import { Component, Input } from '@angular/core';
import { SHARED_STANDALONE_IMPORTS } from '../shared-standalone.imports';
import { CtaButtonComponent } from '../cta-button/cta-button.component';

@Component({
  selector: 'article-component',
  standalone: true,
  imports: [...SHARED_STANDALONE_IMPORTS, CtaButtonComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  @Input() headline: string | undefined = undefined;
  @Input() title: string | undefined = undefined;
  @Input() text: string | undefined = undefined;
}
