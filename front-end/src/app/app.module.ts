import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { UserRoutingModule } from './users/user-routing.module';
import { UsersModule } from './users/users.module';
// import { PetRoutingModule } from './pets/pet-routing.module';
import { PetsModule } from './pets/pets.module';
import { HttpModule ,JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// import { PetsComponent } from './pets/pets.component';
// import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    // PetsComponent,
    // CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    UsersModule,
    UserRoutingModule,
    PetsModule,
    // PetRoutingModule,
    JsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
