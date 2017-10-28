import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './pets.component';
import { PetIndexComponent } from './pet-index/pet-index.component';
import { PetNewComponent } from './pet-new/pet-new.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetShowComponent } from './pet-show/pet-show.component';
import { PetsService } from './pets.service';
import { PetfinderService } from '../search/petfinder.service';

const petRoutes: Routes = [
    {
        path: 'pets',
        component: PetsComponent,
        children: [ //create the sub sections (children) for this route
            {
                path: '',
                component: PetIndexComponent
            },
            {
                path: 'new',
                component: PetNewComponent
            },
            {
                path: 'edit/:id',
                component: PetEditComponent
            },
            {
                path: ':id',
                component: PetShowComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(petRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PetRoutingModule { }
