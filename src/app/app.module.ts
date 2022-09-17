import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import {HttpClientModule} from "@angular/common/http";
import {Router, RouterModule, Routes} from "@angular/router";
import { UsersDetalisComponent } from './components/users-detalis/users-detalis.component';
import { UserDetalisComponent } from './components/user-detalis/user-detalis.component';
import { PostsDetalisComponent } from './components/posts-detalis/posts-detalis.component';

const routes:Routes = [

  {path:'users',component:UsersComponent,children:[

      {path:'detalis/:id', component:UsersDetalisComponent}

    ]},
  {path:'posts',component:PostsComponent , children:[
      {path:'detalis/:id',component: PostsDetalisComponent}
    ]}

]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    UsersDetalisComponent,
    UserDetalisComponent,
    PostsDetalisComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
