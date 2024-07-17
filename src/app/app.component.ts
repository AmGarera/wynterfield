import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  template: `
<div class="container mx-auto px-4">
  <nav class="flex justify-between items-center py-6">
    <a routerLink="/" class="text-2xl font-bold text-gray-900 dark:text-white">Wynterfield</a>
    <button (click)="toggle()" class="md:hidden" type="button">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
    </button>
    <div class="hidden md:block">
      <a routerLink="/about" class="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded">About</a>
      <a routerLink="/contact" class="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded">Contact</a>
    </div>
  </nav>
  <div [ngClass]="{'block': isOpen, 'hidden': !isOpen}" class="md:hidden">
    <a routerLink="/about" class="block text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded">About</a>
    <a routerLink="/contact" class="block text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded">Contact</a>
  </div>
  <router-outlet></router-outlet>
</div>
  `,
  styles: [
    `
      @media (min-width: 640px) {
        .container {
          max-width: 640px;
        }
      }
      @media (min-width: 768px) {
        .container {
          max-width: 768px;
        }
      }
      @media (min-width: 1024px) {
        .container {
          max-width: 1024px;
        }
      }
      @media (min-width: 1280px) {
        .container {
          max-width: 1280px;
        }
      }
    `,
  ],
})
export class AppComponent {
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
