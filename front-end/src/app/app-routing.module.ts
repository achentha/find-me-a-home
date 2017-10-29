import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PetsComponent } from './pets/pets.component';
import { UsersComponent } from './users/users.component';
import { UserNewComponent } from './users/user-new/user-new.component';
import { UserLoginComponent } from './users/user-login/user-login.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'login',
        component: UserLoginComponent
    },
    {
        path: 'signup',
        component: UserNewComponent
    },
    // {
    //     path: 'pets',
    //     component: PetsComponent
    // },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
