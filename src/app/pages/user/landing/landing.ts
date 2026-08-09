import { Component } from '@angular/core';
import { HeaderUser } from "../../../components/user/shared/header-user/header-user";
import { Hero } from "../../../components/user/landing/hero/hero";
import { Trending } from "../../../components/user/landing/trending/trending";
import { ProductViewLanding } from "../../../components/user/landing/product-view-landing/product-view-landing";
import { FooterComponent } from "../../../components/user/shared/footer/footer.component";

@Component({
  selector: 'app-landing',
  imports: [HeaderUser, Hero, Trending, ProductViewLanding, FooterComponent],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {

}
