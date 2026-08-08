import { Injectable } from '@angular/core';
import { createClient, Session, SupabaseClient } from '@supabase/supabase-js';
import {environment} from '../../../../environments/environment.development'
@Injectable({
  providedIn: 'root',
})
export class SupabaseAuthServices {
  private supabase :SupabaseClient
  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }
  get client(){
    return this.supabase
  }
  // Inscription
  async signUp(email: string, password: string, username: string) {
    return this.supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: username
        }
      }
    });
  }

  // Connexion
  async log(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({ email, password });
  }

  // Déconnexion
  async signOut() {
    return this.supabase.auth.signOut();
  }

  // Session actuelle
  async getSession() {
    return this.supabase.auth.getSession();
  }

  // Écouter les changements d'état d'auth
  onAuthStateChange(callback: (session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange((_event, session) => {
      callback(session);
    });
  }
}
