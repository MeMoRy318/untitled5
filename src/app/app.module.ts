import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { UsersComponent } from './componets/users/users.component';
import { UserComponent } from './componets/user/user.component';
import {Route, RouterModule, Routes} from "@angular/router";
import { PostsComponent } from './componets/posts/posts.component';
import { PostComponent } from './componets/post/post.component';
import { UserDetalisComponent } from './componets/user-detalis/user-detalis.component';
import { PostsDetalisComponent } from './componets/posts-detalis/posts-detalis.component';

const routes:Routes = [
  {path:"users", component:UsersComponent , children:[{path:'detalis/:id',component:UserDetalisComponent}]},
  {path:"posts", component:PostsComponent, children:[{path: 'detalis/:id',component: PostsDetalisComponent}]}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
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
