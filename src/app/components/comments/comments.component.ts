import { Component, Input, Output } from '@angular/core';
import { CommentService } from '../../../shared/services/comment.service';
import { Comment } from 'src/shared/models/Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
    
export class CommentsComponent {

    @Input() PostId;
    @Input() PostData;
    @Output() GetPostid;

    comments$ = [];
    comment: Comment = {
        user: '',
        like: 0,
        dislike: 0,
        comment: '',
        comment_at: ''
    };

    likes_clicked = [];
    dislikes_clicked = [];
  
  constructor(public commentService:CommentService) { }
  
    ngOnInit() {
        this.commentService.getComments(this.PostId);
    }
    

    
  
    onLike(comment, id) {
   
        const l = this.likes_clicked.find(i => i === id);
      
        if (l !== undefined) {
            return;
        }
    
        comment.like = comment.like + 1;
        this.commentService.updateComment(this.PostId, comment);
        
        this.likes_clicked.push(id);
        /*

        const dl = this.dislikes_clicked.find(i => i === id);
        if (dl !== undefined) {
            comment.dislike = comment.dislike - 1;
            this.commentService.updateComment(this.PostId, comment);
            this.dislikes_clicked.pop();
        }
        */
      

    }

    onDisLike(comment, id) {
   
        const d = this.dislikes_clicked.find(i => i === id);
      
        if (d !== undefined) {
            return;
        }
    
        comment.dislike = comment.dislike + 1;
        this.commentService.updateComment(this.PostId, comment);
        
        this.dislikes_clicked.push(id);

        /*

        const ld = this.likes_clicked.find(i => i === id);
        if (ld !== undefined) {
            comment.like = comment.like - 1;
            this.commentService.updateComment(this.PostId, comment);
            console.log(this.likes_clicked);
            this.likes_clicked.pop();
            console.log(this.likes_clicked);
        }

        */
        
       
        

    }
    


    onDelete(comId) {
        this.commentService.deleteComment(this.PostId, comId);
    }



}