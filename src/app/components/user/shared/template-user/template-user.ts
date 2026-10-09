import { Component } from '@angular/core';
import {HeaderUser} from "../header-user/header-user";
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-template-user',
  imports: [
    HeaderUser,
    FooterComponent
  ],
  templateUrl: './template-user.html',
  styleUrl: './template-user.css',
})
export class TemplateUser {

}
