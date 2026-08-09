import { TestBed } from '@angular/core/testing';

import { SupabaseProductService } from './supabase-product.service';

describe('SupabaseProductService', () => {
  let service: SupabaseProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupabaseProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
