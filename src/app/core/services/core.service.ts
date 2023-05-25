import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { withCache } from '@ngneat/cashew';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private url: string = environment.apiUrl;
  private postUrl: string = 'posts';
  private userUrl: string = 'users';

  private options = {
    context: withCache({
      version: 'v1',
      key: 'omelet'
    })
  };

  constructor(private http: HttpClient) {}

  getPosts() {
    const url = `${this.url}${this.postUrl}?userId=1`;
    return this.http.get<any>(url, this.options);
  }

  getUsers() {
    const url = `${this.url}${this.userUrl}`;
    return this.http.get<any>(url, this.options);
  }
}
