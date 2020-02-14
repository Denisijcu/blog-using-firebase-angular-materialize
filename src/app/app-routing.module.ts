import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

import { PostsComponent } from './components/posts/posts.component';
import { PostDetailComponent } from './components/postdetail/postdetail.component';
import { AddpostComponent } from './components/addpost/addpost.component';
import { EditpostComponent } from './components/editpost/editpost.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'posts', component: PostsComponent },
  { path: 'add', component: AddpostComponent },
  { path: 'postdetail/:id', component: PostDetailComponent},
  { path: 'post/:id', component: EditpostComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
