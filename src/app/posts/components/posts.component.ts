import { SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { catchError, of, retry, tap } from 'rxjs';
import { INewPost, IPost } from '../models/posts.interface';
import { PostsHttpService } from '../services/posts-http.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  addNewPostMode = false;
  chosenPostToEdit: IPost | null = null;
  
  // თავიდან არის ნალი მაგრამ თუა რიჩიეს შეიცვლება აიპოსტ
  posts: IPost[] =[]
  constructor(private postsHttp: PostsHttpService) { }

  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts(){
    this.postsHttp.getPosts().subscribe((res)=> {
      this.posts = res;
      
    })
  }

  onAddNewPost(){
    this.addNewPostMode = true;
  }
  onEdit(id: number){
    this.chosenPostToEdit = this.posts.find((post: IPost) => post.id === id) as IPost;
  }
  onDelete(id: number){
    const indexIdPostToBeDeleted = this.posts.findIndex((post) => post.id === id);
      this.postsHttp.deletePosts(id).pipe(tap((data)=>{
        this.posts.splice(indexIdPostToBeDeleted, 1)
    }),
     catchError((err)=>{
      alert('something Heppened')
      return of (null)
    }))
    .subscribe()
    // this.posts.splice(indexIdPostToBeDeleted, 1)
  }

  onSubmitPost(post: INewPost | IPost){

    if (!(post as IPost).id) {
      const newPost: IPost = {
        id: 20,
        body: post.body,
        title: post.title,
        userId: 90
      }
      this.posts.push(newPost);
      this.addNewPostMode = false;
    }else{
      const indexToReplace = this.posts.findIndex((p) => p.id === (post as IPost).id);
      this.posts[indexToReplace] = post as IPost;
    }
    }

}
