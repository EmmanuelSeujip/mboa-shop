import { Component } from '@angular/core';
import { HeaderUser } from "../../../components/user/shared/header-user/header-user";
import { Hero } from "../../../components/user/landing/hero/hero";
import { Trending } from "../../../components/user/landing/trending/trending";

@Component({
  selector: 'app-landing',
  imports: [HeaderUser, Hero, Trending],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {

}
