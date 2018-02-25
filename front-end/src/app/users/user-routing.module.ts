import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserShowComponent } from './user-show/user-show.component';
import { PetfinderService } from '../search/petfinder.service';
import { PetIndexComponent } from '../pets/pet-index/pet-index.component';
import { PetShowComponent } from '../pets/pet-show/pet-show.component';
import { CommentNewComponent } from '../comments/comment-new/comment-new.component';
import { CommentsService } from '../comments/comments.service';

const userRoutes: Routes = [
    {
        path: 'users',
        component: UsersComponent,
        children: [ //create the sub sections (children) for this route
            // {
            //     path: '',
            //     component: UserIndexComponent
            // },
            {
                path: 'new',
                component: UserNewComponent
            },
            {
                path: 'edit/:id',
                component: UserEditComponent
            },
            {
                path: ':id',
                component: UserShowComponent
            },
            {
                path: ':id/pets',
                component: PetIndexComponent,
                // as: 'showUserPets'
            },
            {
                path: ':id/pets/:pet_api_id',
                component: PetShowComponent
            },
            {
                path: ':id/pets/:pet_id/comments/new',
                component: CommentNewComponent
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule { }
