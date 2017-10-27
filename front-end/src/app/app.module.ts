import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { UsersRoutingModule } from './users/user-routing.module';
import { UsersModule } from './users/users.module';
import { HttpModule ,JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PetsComponent } from './pets/pets.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PetsComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    UsersModule,
    UsersRoutingModule,
    JsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
