import { Component, Input, Output } from '@angular/core';
import { PostService } from '../../../shared/services/post.service';
import { Post } from '../../../shared/models/Post';
import { Router } from '@angular/router';
import { faShare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
    
export class PostsComponent {
 isLoading = true;



  post: Post;
  posts: any = [];

  texto = "Esto es una prueba";
  url = "https://blog-dsl.netlify.com";

  constructor(private postService: PostService, private router:Router) {

   }
  
  addPost() {
    
    this.post = {
      id: '',
      title: '',
      content: '',
      user: '',
      like: 0,
      dislike: 0,
      comments: null,
      posted: ''
    };

    this.postService.AddPost(this.post);

   
    
  }

  ngOnInit() {
    this.posts = [];
    this.posts = this.postService.getPostList();
  

 
   // const f = setTimeout(()=>this.isLoading = false, 1000);
  }
  ngOnChange() {
    this.posts = [];
    this.ngOnInit();
  }
  
  onShare() {
    return true;
  }
}
