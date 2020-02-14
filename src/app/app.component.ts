import { Component } from '@angular/core';
import { PostService } from '../shared/services/post.service';
import { Post } from '../shared/models/Post';
import { Observable } from 'rxjs';
//import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myblog';
  isLoading = false;

}
