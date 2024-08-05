import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
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
