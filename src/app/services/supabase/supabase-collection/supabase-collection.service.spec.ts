import { TestBed } from '@angular/core/testing';

import { SupabaseCollectionService } from './supabase-collection.service';

describe('SupabaseCollectionService', () => {
  let service: SupabaseCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupabaseCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
