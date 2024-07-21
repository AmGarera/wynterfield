import { Component, OnInit } from '@angular/core';
import  PostAttributes, { FeedAttributes, Item } from '../../post-attributes';
import { RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-center my-10 dark:text-white">{{title}}</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      @for (post of posts; track $index) {
        <div class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">

          <a [routerLink]="['/blog/', post.id]" class="block p-6">
            <h2 class="text-xl font-semibold mb-2 dark:text-white">{{ post.title }}</h2>
            <p class="text-gray-700 dark:text-gray-400">{{ post.contentText }}</p>
          </a>

        </div>
      }
      </div>
    </div>
  `,
  styles: [
    `
      @media (prefers-color-scheme: dark) {
        :host {
          --tw-text-opacity: 1;
          color: rgba(255, 255, 255, var(--tw-text-opacity));
        }
      }
    `,
  ],
})
export default class HomeComponent implements OnInit {
  posts!: Item[];
  title: string = '';

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.title = posts.title;

      this.posts = posts.items;
    });
  }
}
