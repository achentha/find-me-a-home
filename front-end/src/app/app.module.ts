import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { UserRoutingModule } from './users/user-routing.module';
import { UsersModule } from './users/users.module';
import { PetsModule } from './pets/pets.module';
import { HttpModule ,JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CommentNewComponent } from './comments/comment-new/comment-new.component';
import { CommentsComponent } from './comments/comments.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CommentNewComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    UsersModule,
    UserRoutingModule,
    PetsModule,
    JsonpModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
