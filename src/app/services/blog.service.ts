import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import PostAttributes, { FeedAttributes } from '../post-attributes';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = 'https://wynterfield.com';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<FeedAttributes> {
    return this.http.get<FeedAttributes>(this.apiUrl + '/json');
  }

  getPostBySlug(slug: string): Observable<FeedAttributes> {
    // https://wynterfield.com/i/{id}/json
    return this.http.get<FeedAttributes>(`${this.apiUrl}/i/${slug}/json`);
  }
}
