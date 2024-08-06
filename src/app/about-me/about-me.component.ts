import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  // ngOnInit() {
  //   AOS.init({ disable: 'mobile' }); //AOS - 2
  //   AOS.refresh(); //refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  // }

  ngOnInit() {
    AOS.init();
  }
}
