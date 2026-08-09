import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewLanding } from './product-view-landing';

describe('ProductViewLanding', () => {
  let component: ProductViewLanding;
  let fixture: ComponentFixture<ProductViewLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductViewLanding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductViewLanding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
