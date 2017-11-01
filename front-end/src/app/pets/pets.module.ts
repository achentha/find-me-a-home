import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PetsComponent } from './pets.component';
import { PetIndexComponent } from './pet-index/pet-index.component';
import { PetShowComponent } from './pet-show/pet-show.component';
import { PetsService } from './pets.service';
import { PetfinderService } from '../search/petfinder.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    PetsComponent,
    PetIndexComponent,
    PetShowComponent,
  ],
  providers: [
    PetsService,
    PetfinderService,
  ]
})
export class PetsModule { }
