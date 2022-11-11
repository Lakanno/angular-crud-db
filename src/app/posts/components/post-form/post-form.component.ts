import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { INewPost, IPost } from '../../models/posts.interface';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  _chosenPostToEdit: INewPost | null;
    @Input() set chosenPostToEdit(post: INewPost | null){
    this._chosenPostToEdit = post;
    if (post) {
        //     this.title.setValue(post.title),
        //     this.body.setValue(post.body)
      this.form.patchValue(post)
    } else {
      this.form.reset();
    }
  }


  @Output() onSubmit = new EventEmitter<INewPost | IPost>();
  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(10)]),
    body: new FormControl('', [Validators.required, Validators.maxLength(100)]),
  })


  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    if (!this.form.valid) {
      this.form.markAsTouched();
      return;
    }
    const formData: INewPost = this.form.value as INewPost;
    this.onSubmit.emit({...this._chosenPostToEdit, ...formData});
  }

  private get title(){
   return this.form.controls['title'] as FormControl;
  }

  private get body(){
    return this.form.controls['body'] as FormControl;
   }
 

}
