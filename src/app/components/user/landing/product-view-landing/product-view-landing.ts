import { Component, inject, signal } from '@angular/core';
import { ProductCard } from "../../shared/product-card/product-card";
import { Product } from '../../../../models/product/product';
import { ProductServices } from '../../../../services/object/product/product-services.service';

@Component({
  selector: 'app-product-view-landing',
  imports: [ProductCard],
  templateUrl: './product-view-landing.html',
  styleUrl: './product-view-landing.css',
})
export class ProductViewLanding {
  private readonly productService = inject(ProductServices);

  products = signal<Product[]>([]);
  loading = signal(true);
  error = signal(false);

  async ngOnInit(): Promise<void> {
    try {
      const data = await this.productService.getLandingProduct();
      this.products.set(data);
    } catch (err) {
      console.error(err);
      this.error.set(true);
    } finally {
      this.loading.set(false);
    }
  }
  onToggleFavorite($event: any) {
    
  }
  onAddToCart($event: any) {
    throw new Error('Method not implemented.');
  }

}
