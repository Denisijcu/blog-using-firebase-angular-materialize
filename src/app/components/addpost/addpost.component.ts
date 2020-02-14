import { Component, Input, Output } from '@angular/core';
import { Post } from '../../../shared/models/Post';
import { PostService } from '../../../shared/services/post.service';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { finalize} from 'rxjs/operators';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
    
export class AddpostComponent {
    @Input() isLoading;
    @Output() isLoaded;

 
    post: Post = {
        id: '',
        title: '',
        content: '',
        user: 'dslij@gmail.com',
        like: 0,
        dislike: 0,
        comments: 0,
        posted: ''
        
    };

   

    file: FileList;
    url = '';

    imgSrc: string = '/assets/images/blog.png';
    selectedImage: any;

  constructor(private postService:PostService,private fs:AngularFireStorage) { }
  
    onSubmit() { 
       
        var filePath = `images/${this.selectedImage.name}_${new Date().getTime()}`;

        console.log(filePath);

       
      
        try {
            const fileRef = this.fs.ref(filePath);
            this.fs.upload(filePath, this.selectedImage).snapshotChanges().pipe(finalize(() => {
                fileRef.getDownloadURL().subscribe((url) => {
                    console.log('Url es', url);
                    this.post.url = url;
                    this.post.file = this.selectedImage.name;
                    this.post.posted = new Date().toString();
                    this.postService.savePost(this.post); 


                    this.postService.postsArray = [];

                 
                  


                    this.cleanform();
                })

            })

            ).subscribe();    
           
         
        }
        catch{
            console.log('Something wrong happened');
        }
    }

   
    handleFiles(event: any) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e: any) => this.imgSrc = e.target.result;
            reader.readAsDataURL(event.target.files[0]);
            this.selectedImage = event.target.files[0];
        }
        else {
            this.imgSrc = '/assets/images/blog.png';
        }
           
    }


    cleanform() {

        this.post = {
            id: '',
            title: '',
            content: '',
            user: '',
            like: 0,
            dislike: 0,
            comments: 0,
            posted: ''
        }

        this.imgSrc = '/assets/images/blog.png';
        
    }
   
    
}