import { Component } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';

import PostAttributes, { FeedAttributes } from '../../post-attributes';
import { BlogService } from '../../services/blog.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [AsyncPipe, MarkdownComponent],
  template: `
    @if (post$ | async; as post) {
    <article>
      <img class="post__image" [src]="post.items[0].image" />
      <div [innerHTML]="post.items[0].content_html"></div>
    </article>
    }
  `,
  styles: [
    `
      .post__image {
        max-height: 40vh;
      }
    `,
  ],
})
export default class BlogPostComponent {
  post$: Observable<FeedAttributes> | undefined;
  slug: string = '';
  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
        // Retrieve the slug from the URL
        const slug = this.route.snapshot.paramMap.get('id');
        // Use this.slug as needed, for example, to fetch blog details
        if (slug) {
          this.post$ = this.blogService.getPostBySlug(slug);
          console.log(this.post$.subscribe(res => console.log("Response:", res)));
        }
  }
}
