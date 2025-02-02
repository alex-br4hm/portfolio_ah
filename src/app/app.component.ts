import { Component } from '@angular/core';
import AOS from 'aos';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
  ngOnInit() {
    AOS.init({
      offset: 0,
      duration: 1000,
      delay: 100,
      once: false,
    });
  }
}
