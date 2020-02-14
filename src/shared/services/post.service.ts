import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { CommentService } from './comment.service';
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument
  } from '@angular/fire/firestore';
  
@Injectable({
  providedIn: 'root'
})


export class PostService {
 
    postsRef: AngularFirestoreCollection<Post>;
    postRef: AngularFirestoreDocument<Post>;
  
    postsArray = [];
    commentsArray = [];
    
  public post: Post;
  public totalComment = 0;

   // private basePath = '/posts-list';
  
    likes = false;
  
  constructor(private db: AngularFirestore) {
    
        this.postsRef = this.db.collection<Post>('posts-list');

        this.postsRef.snapshotChanges().subscribe(actions => {
            return actions.map(action => {
              const data = action.payload.doc.data() as Post;
              const id = action.payload.doc.id;
              //** **/
               data.id= id;
               this.postsArray.push(data);
              //** **/
              return { id, ...data };
            });
          });
    }
    

    ngOnInit() {
      this.postsArray.slice(0, this.postsArray.length);

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
    }

  /* Create Post */
    AddPost(post: Post) {
        this.postsRef.add(post).catch(error => console.log(error));
    }

    
  /* Get post */
  GetPost(id: string) {
  
    this.postRef = this.db.doc<Post>(`posts-list/${id}`);
    this.postRef.snapshotChanges().subscribe( action => {
         if (action.payload.exists === false) {
          return null;
      } else {
          const data = action.payload.data() as Post;
          data.id= action.payload.id;
          this.post = data;   
          return this.post;
      }
    });
  }  

  getPostList() {
   // this.postsArray = [];
    return this.postsArray;
  }

  savePost(post: Post) {
    this.postsRef.add(post);
  }

  updatePost(id: string, post: Post) {
    this.postsRef.doc(id).update(post) ;
  }

  deletePost(id: string) {
    this.postsRef.doc(id).delete();
  }


  like(id: string, add: boolean) {
    this.GetPost(id);
    if (add) {
      this.post.like = this.post.like+1;
    }
    else {
      this.post.dislike = this.post.like+1;
    }
    this.updatePost(id, this.post);
    
    this.postsArray = [];
    this.getPostList();

  }



  

}