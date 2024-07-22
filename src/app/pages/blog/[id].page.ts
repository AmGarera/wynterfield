import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { FeedAttributes } from '../../post-attributes';
import { BlogService } from '../../services/blog.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    @if (post$ | async; as post) {
    <article class="max-w-4xl mx-auto p-5">
      <h1 class="text-4xl font-bold mb-8">{{ post.items[0].title }}</h1>
      <img class="post__image w-full h-auto object-cover object-center mb-8" [src]="post.items[0].image" />
      <div class="prose prose-lg max-w-none" [innerHTML]="post.items[0].content_html"></div>
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
        }
  }
}
