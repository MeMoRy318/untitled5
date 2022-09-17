import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { UsersComponent } from './component/users/users.component';
import { UserComponent } from './component/user/user.component';
import { PostsComponent } from './component/posts/posts.component';
import { PostComponent } from './component/post/post.component';
import { ComentsComponent } from './component/coments/coments.component';
import { ComentComponent } from './component/coment/coment.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    ComentsComponent,
    ComentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
