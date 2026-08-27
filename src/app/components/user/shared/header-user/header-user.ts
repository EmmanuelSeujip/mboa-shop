import { Component } from '@angular/core';
import { OverlapDetectorDirective } from '../../../../directive/overlap-detector.directive';

@Component({
  selector: 'app-header-user',
  imports: [OverlapDetectorDirective],
  templateUrl: './header-user.html',
  styleUrl: './header-user.css',
})
export class HeaderUser {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
