import { TestBed } from '@angular/core/testing';

import { IcarusPlaygroundCrudService } from './icarus-playground-crud.service';

describe('IcarusPlaygroundCrudService', () => {
  let service: IcarusPlaygroundCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcarusPlaygroundCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
