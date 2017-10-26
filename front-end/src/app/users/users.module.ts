import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserIndexComponent } from './user-index/user-index.component';
import { UsersComponent } from './users.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserShowComponent } from './user-show/user-show.component';
import { UsersService } from './users.service';
import { PetfinderService } from '../search/petfinder.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [UserIndexComponent, UsersComponent, UserNewComponent, UserEditComponent, UserShowComponent],
  providers: [
    UsersService,
    PetfinderService,
  ]
})
export class UsersModule { }
