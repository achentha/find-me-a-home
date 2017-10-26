import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserShowComponent } from './user-show/user-show.component';
import { PetfinderService } from '../search/petfinder.service';

const aboutRoutes: Routes = [
    {
        path: 'users',
        component: UsersComponent,
        children: [ //create the sub sections (children) for this route
            {
                path: '',
                component: UserIndexComponent
            },
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
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(aboutRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UsersRoutingModule { }
