import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '../supabase-service';

@Injectable({
  providedIn: 'root',
})
export class SupabaseCollectionService {
  private __supabase = inject(SupabaseService);
  private readonly supabase = this.__supabase.client;

  getAllCollections() {
    return this.supabase.from('collections').select('*');
  }

  async getCollectionWithLimit(){}
}
