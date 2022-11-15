import { SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { catchError, of, retry, tap } from 'rxjs';
import { INewPost, IPost } from '../models/posts.interface';
import { PostsHttpService } from '../services/posts-http.service';
import { DummyService } from '../services/dummy.service';
import { ConsoleManagerService } from '../services/console-manager.service';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  addNewPostMode = false;
  chosenPostToEdit: IPost | null = null;
  chosenPostToFullInfo: IPost | null;
  // თავიდან არის ნალი მაგრამ თუა რიჩიეს შეიცვლება აიპოსტ
  posts: IPost[] =[]
  chosenLanguage$ = this.headerService.chosenLanguage$

  constructor(private postsHttp: PostsHttpService, private dummyService: DummyService, private headerService: HeaderService) { }

  ngOnInit(): void {
    this.getAllPosts();
    this.dummyService.sayHello(); //Dependency injection

    // Services დამოკიდებულებების ჩაინსერთება აი ამბ პრობლემას აგვარებს dependency injection ი
    // const consoleManager = new ConsoleManagerService();
    // const dummyService = new DummyService(consoleManager);
    // dummyService.sayHello();
  }

  getAllPosts(){
    this.postsHttp.getPosts().subscribe((res)=> {
      this.posts = res;
      this.headerService.postCount = this.posts.length;
    })
  }

  getOnePost(id: number){
    this.postsHttp.getOnePost(id).subscribe((onePost) =>{
     this.chosenPostToFullInfo = onePost;
    });
  }

  onAddNewPost(){
    this.addNewPostMode =  !this.addNewPostMode;
  }
  onEdit(id: number){
    this.chosenPostToEdit = this.posts.find((post: IPost) => post.id === id) as IPost;
  }
  onDelete(id: number){
    const indexIdPostToBeDeleted = this.posts.findIndex((post) => post.id === id);
      this.postsHttp.deletePosts(id).pipe(tap((data)=>{
        this.posts.splice(indexIdPostToBeDeleted, 1)
        this.headerService.postCount = this.headerService.postCount - 1;
    }),
    retry(2), //რექვესტი რომ იგზავნება მასინ გამოიყენება
     catchError((err)=>{
      alert('something Heppened')
      return of (null)
    }))
    .subscribe()
    // this.posts.splice(indexIdPostToBeDeleted, 1)
  }

  addNewPost(post: INewPost){
    this.postsHttp.addNewPost(post).subscribe((data) => {
      console.log(data);
      this.posts.push(data);
      this.headerService.postCount = this.headerService.postCount + 1;
    })
  }

  updatePost(post: IPost){
    this.postsHttp.updatePost(post).subscribe((data)=>{
      this.chosenPostToEdit = null;
      this.getAllPosts();
      console.log(data);      
    })
  }

  onSubmitPost(post: INewPost | IPost){
    if (!(post as IPost).id) {
      const newPost = {
        body: post.body,
        title: post.title,
        userId: 90
      } as INewPost
      this.addNewPost(newPost);
      // this.posts.push(newPost);
      this.addNewPostMode = false;
      
    }else{
      const indexToReplace = this.posts.findIndex((p) => p.id === (post as IPost).id);
      this.updatePost(post as IPost);
      // this.posts[indexToReplace] = post as IPost;
    }
  }

  get language(){
    // return this.headerService.chosenLanguage;
    return 'en'
  }

}
