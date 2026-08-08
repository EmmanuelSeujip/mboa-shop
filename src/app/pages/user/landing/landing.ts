import { Component } from '@angular/core';
import { HeaderUser } from "../../../components/user/shared/header-user/header-user";
import { Hero } from "../../../components/user/landing/hero/hero";

@Component({
  selector: 'app-landing',
  imports: [HeaderUser, Hero],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {

}
