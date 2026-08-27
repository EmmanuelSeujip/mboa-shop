import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private readonly supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
    console.log('URL:', environment.supabaseUrl);
    console.log('Key:', environment.supabaseKey);
  }

  get client(): SupabaseClient {
    return this.supabase;
  }
}