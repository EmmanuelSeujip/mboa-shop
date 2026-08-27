import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  newsletterEmail = '';
  subscribed = false;

  onSubscribe(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    // TODO: brancher sur le service d'inscription newsletter réel
    this.subscribed = true;
    this.newsletterEmail = '';
    form.resetForm();
  }
}