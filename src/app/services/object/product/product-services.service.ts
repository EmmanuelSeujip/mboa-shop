import { inject, Injectable } from '@angular/core';
import { SupabaseProductService } from '../../supabase/supabase-product/supabase-product.service';
import { Product } from '../../../models/product/product';

@Injectable({
  providedIn: 'root',
})
export class ProductServices {
  private readonly supabaseProductService=inject(SupabaseProductService)
  public async getLandingProduct() :Promise<Product[]>{
    return this.supabaseProductService.getProductWithLimit(4)
  }
}
