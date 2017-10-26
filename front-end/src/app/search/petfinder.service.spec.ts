import { TestBed, inject } from '@angular/core/testing';

import { PetfinderService } from './petfinder.service';

describe('PetfinderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetfinderService]
    });
  });

  it('should be created', inject([PetfinderService], (service: PetfinderService) => {
    expect(service).toBeTruthy();
  }));
});
