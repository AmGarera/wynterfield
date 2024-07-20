import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import PostAttributes, { FeedAttributes } from '../post-attributes';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = 'https://wynterfield.com/json';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<FeedAttributes> {
    return this.http.get<FeedAttributes>(this.apiUrl);
  }

  getPostBySlug(slug: string): Observable<PostAttributes> {
    return this.http.get<PostAttributes>(`${this.apiUrl}/${slug}`);
  }
}
