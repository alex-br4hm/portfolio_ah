import { Component, inject } from '@angular/core';
import { TranslationService } from '../translation.service';
import { TranslateModule } from '@ngx-translate/core';

type TechIcon = {
  imgSrc: string;
  techName: string;
};

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  techImgs: TechIcon[] = [
    { imgSrc: './assets/img/tech-icons/angular-icon.svg', techName: 'Angular' },
    { imgSrc: './assets/img/tech-icons/ts-icon.svg', techName: 'TypeScript' },
    { imgSrc: './assets/img/tech-icons/js-icon.svg', techName: 'JavaScript' },
    { imgSrc: './assets/img/tech-icons/html-icon.svg', techName: 'HTML' },
    { imgSrc: './assets/img/tech-icons/css-icon.svg', techName: 'CSS' },
    { imgSrc: './assets/img/tech-icons/git-icon.svg', techName: 'Git' },
    { imgSrc: './assets/img/tech-icons/api-icon.svg', techName: 'API' },
    {
      imgSrc: './assets/img/tech-icons/md-icon.svg',
      techName: 'Material Design',
    },
    {
      imgSrc: './assets/img/tech-icons/firebase-icon.svg',
      techName: 'Firebase',
    },
    { imgSrc: './assets/img/tech-icons/scrum-icon.svg', techName: 'Scrum' },
  ];

  translate = inject(TranslationService);
}
