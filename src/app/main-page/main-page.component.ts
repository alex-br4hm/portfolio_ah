import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AnimateArrowComponent } from './animate-arrow/animate-arrow.component';
import { OtherAnimateArrowComponent } from './other-animate-arrow/animate-arrow.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { LegalNoticeComponent } from '../legal-notice/legal-notice.component';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-main-page',
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
    FooterComponent,
    LegalNoticeComponent,
    HeroComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
