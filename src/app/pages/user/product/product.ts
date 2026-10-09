import { Component } from '@angular/core';
import {TemplateUser} from '../../../components/user/shared/template-user/template-user';

@Component({
  selector: 'app-product',
  imports: [
    TemplateUser
  ],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

}
