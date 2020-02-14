import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PostService } from '../../../shared/services/post.service';
import { CommentService } from '../../../shared/services/comment.service';
import { Location } from '@angular/common';
import { Post } from 'src/shared/models/Post';
import { Comment } from 'src/shared/models/Comment';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
    
export class PostDetailComponent {

    id: string;
    likes = true;

    post: Post;
  
    
    comment: Comment = {
        user: '',
        like: 0,
        dislike: 0,
        comment: '',
        comment_at: '',
        
    };
    
    comments: string = '';
    comments$: any = [];

   


    constructor(private router: Router,private route: ActivatedRoute, public postService: PostService, public commentService: CommentService,private location: Location) {
        this.id = this.route.snapshot.params['id'];

        try {
            this.postService.GetPost(this.id);   

        }
        catch{
            console.log('Something wrong happenend');
        }
      
    }
  
  
    ngOnInit() {
        this.comments$ = [];
        this.comments$ = this.commentService.commentsArray;
    }

    onLike() {
        this.postService.like(this.id,true);
        this.postService.postsArray = [];
      //  this.router.navigate(['/posts']);
    }
    ondisLike() {
        this.postService.like(this.id,false);
        this.postService.postsArray = [];
      //  this.router.navigate(['/posts']);
    }



    onDelete(postId: string) {
       
        if (this.commentService.commentsArray.length !== 0) {
            let len = this.commentService.commentsArray.length;
            alert(`Sorry, this post has ${len} comments. It couldn't be deleted`);
        } else {
            try {
                this.postService.deletePost(postId);
                 alert(`Post deleted succesfully`);  
            }
            catch {
                console.log('There was a problem deleting this post');
            }
            this.postService.postsArray = [];
            this.router.navigate(['/posts']);
            
          
        }
        
    }

  
    onSubmit() {
        this.comment = {
            user: 'User',
            comment: this.comments,
            like: 0,
            dislike: 0,
            comment_at: new Date().toString()
        }
        this.commentService.addComment(this.id, this.comment);
        this.comments = '';

        console.log(this.postService.post);
        
        if (this.postService.post.comments !== undefined) {
            this.postService.post.comments = this.postService.post.comments + 1;
            this.postService.updatePost(this.id, this.postService.post);
        }

      
        
 
    }

    onShare() {
        
    }
    onBack() {        
        this.location.back();
    }

    ngOnDestroyed() {
        this.likes = true;
    }

    
    
}