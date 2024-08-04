import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AnimateArrowComponent } from './animate-arrow/animate-arrow.component';
import { OtherAnimateArrowComponent } from './other-animate-arrow/animate-arrow.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavBarComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    AnimateArrowComponent,
    OtherAnimateArrowComponent,
    ReferencesComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}
