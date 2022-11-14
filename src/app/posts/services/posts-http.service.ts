import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INewPost, IPost } from '../models/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsHttpService {
  baseUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get<IPost[]>(this.baseUrl)
  }

  getOnePost(id: number){
    return this.http.get<IPost>(`${this.baseUrl}/${id}`)
  }

  deletePosts(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  addNewPost(post: INewPost){
    return this.http.post<IPost>(this.baseUrl, post);
  }

  updatePost(post: IPost){
    return this.http.put<IPost>(`${this.baseUrl}/${post.id}`, post);
  }


}
