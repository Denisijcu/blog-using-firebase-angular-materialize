import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SliderComponent } from './components/slider/slider.component';
import { ActionbtnComponent } from './components/actionbtn/actionbtn.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

import { PostsComponent } from './components/posts/posts.component';
import { PostDetailComponent } from './components/postdetail/postdetail.component';
import { AddpostComponent } from './components/addpost/addpost.component';
import { EditpostComponent } from './components/editpost/editpost.component';

import { CommentsComponent } from './components/comments/comments.component';


/* Firebase */
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

// Firebase Setup
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';



/** Services**/
import { PostService } from '../shared/services/post.service';
import { CommentService } from '../shared/services/comment.service';


import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare, faHome } from '@fortawesome/free-solid-svg-icons';
import { faSquare as farSquare, faCheckSquare as farCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';


import { JwSocialButtonsModule } from 'jw-angular-social-buttons';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoaderComponent,
    SidebarComponent,
    HomeComponent,
    SliderComponent,
    ActionbtnComponent,
    PostsComponent,
    PostDetailComponent,
    AddpostComponent,
    EditpostComponent,
    CommentsComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FontAwesomeModule,
    JwSocialButtonsModule
  ],
  providers: [PostService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private library: FaIconLibrary) {
      library.addIcons(faSquare, faCheckSquare, farSquare, farCheckSquare, faStackOverflow, faGithub, faMedium,faHome);
    }

 }
