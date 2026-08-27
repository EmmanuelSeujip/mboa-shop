import { TestBed } from '@angular/core/testing';

import { SupabaseAuthServices } from './supabase-auth.service';

describe('SupabaseAuth', () => {
  let service: SupabaseAuthServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupabaseAuthServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
