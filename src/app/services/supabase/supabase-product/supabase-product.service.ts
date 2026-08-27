import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '../supabase-service';
import { Product } from '../../../models/product/product';

@Injectable({
  providedIn: 'root',
})
export class SupabaseProductService {
  private readonly __supabaseService=inject(SupabaseService)
  private readonly supabaseClient=this.__supabaseService.client

  public async getProductWithLimit(limit: number): Promise<Product[]> {
    const { data, error } = await this.supabaseClient
    .from('product')
    .select('*')
    .limit(limit);

    if (error) {
      throw new Error(`Erreur lors de la récupération des produits: ${error.message}`);
    }

    return data ?? [];
  }

}
