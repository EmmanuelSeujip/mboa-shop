import { Component } from '@angular/core';
import { OverlapDetectorDirective } from '../../../../directive/overlap-detector.directive';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-user',
  imports: [OverlapDetectorDirective, RouterLink, RouterLinkActive],
  templateUrl: './header-user.html',
  styleUrl: './header-user.css',
})
export class HeaderUser {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
