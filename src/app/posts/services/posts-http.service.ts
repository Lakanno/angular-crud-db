import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../models/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsHttpService {
  baseUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get<IPost[]>(this.baseUrl)
  }

  deletePosts(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
