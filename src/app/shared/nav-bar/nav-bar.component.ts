import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  translate = inject(TranslationService);

  isOpened = false;
  closingAnimation = false;

  toggleNav() {
    if (this.isOpened) {
      this.closingAnimation = true;
      setTimeout(() => {
        this.isOpened = !this.isOpened;
        this.closingAnimation = false;
      }, 200);
    } else this.isOpened = !this.isOpened;
  }
}
