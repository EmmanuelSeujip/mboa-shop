import { Component } from '@angular/core';
import { Sign } from "../../../components/user/auth/sign/sign";

@Component({
  selector: 'app-auth',
  imports: [Sign],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {

}
