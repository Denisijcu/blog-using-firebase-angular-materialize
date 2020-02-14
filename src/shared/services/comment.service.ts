import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';
import { PostService } from '../services/post.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument
  } from '@angular/fire/firestore';
  import { Router} from '@angular/router';

  
@Injectable({
  providedIn: 'root'
})

export class CommentService {
 
 // commentRef: AngularFirestoreCollection<Comment>;

  commentsRef: AngularFirestoreCollection<Comment>;
  commentRef: AngularFirestoreDocument<Comment>;


  commentsArray = [];
  comment: Comment;
  //resultado: any;
   
  //commentSet: any;
  //total_comments: any;

  postId = '';


    
  constructor(private db: AngularFirestore, private postService:PostService, private router:Router) {

    this.comment = {
      user: '',
      like: 0,
      dislike: 0,
      comment: '',
      comment_at: ''
    };

  }
      
  addComment(id: string, comment: Comment) {
     this.db.collection('posts-list').doc(`${id}`).collection('comments').add(comment)
     .then(function() {
      console.log("Document successfully written!");
     })
     .catch(function(error) {
        console.error("Error writing document: ", error);
     });
    
    this.commentsArray = [];
  }

  getComments(id: string) {
    
    this.commentsArray = [];
    
    this.commentsRef = this.db.collection<Post>('posts-list').doc(`${id}`).collection('comments');

    this.commentsRef.snapshotChanges().subscribe((actions) => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Comment;
        const id = action.payload.doc.id;
        //** **/
         data.id= id;
        this.commentsArray.push(data);
       // this.total_comments = this.commentsArray.length;
        //** **/
        return { id, ...data };
      });
    })
 
  }



   /* GetComment */
  
   GetComment(postId: string, commentId: string) {
  
   
    this.commentRef = this.db.collection<Post>('posts-list').doc(`${postId}`).collection<Comment>('comments').doc(`${commentId}`);
    this.commentRef.snapshotChanges().subscribe( action => {
         if (action.payload.exists === false) {
          return null;
      } else {
          const data = action.payload.data() as Comment;
          data.id= action.payload.id;
           this.comment = data;  
          return this.comment;
      }
     
    });
       
  }  


  updateComment(postId: string, comment) {
    this.db.collection('posts-list').doc(`${postId}`).collection('comments').doc(`${comment.id}`).update(comment);
    this.commentsArray = [];
  }

  deleteComment(id: string, commentId) {
    this.db.collection('posts-list').doc(`${id}`).collection('comments').doc(`${commentId}`).delete();
  
    this.commentsArray = [];
  }
}