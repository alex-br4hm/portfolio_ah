import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgClass, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  translate = inject(TranslationService);

  projects = [
    {
      imgSrc: './assets/img/join.svg',
      title: 'Join',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      description_de:
        'Ein Task Manager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mithilfe von Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.',

      technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      gitLink: '',
      demoLink: 'https://join.haehnlein-alexander.org/',
    },
    {
      imgSrc: './assets/img/sharkie.svg',
      title: 'Sharkie',
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help Sharkie to find coins and poison bottles to fight against the killer whale.',
      description_de:
        'Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Sharkie, Münzen und Giftflaschen zu finden, um gegen den Killerwal zu kämpfen.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      gitLink: 'https://github.com/alex-br4hm/Sharkie',
      demoLink: 'https://sharkie.haehnlein-alexander.org/',
    },
    {
      imgSrc: './assets/img/pokedex.png',
      title: 'Pokedex',
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help Sharkie to find coins and poison bottles to fight against the killer whale.',
      description_de:
        'Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Sharkie, Münzen und Giftflaschen zu finden, um gegen den Killerwal zu kämpfen.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      gitLink: 'https://github.com/alex-br4hm/Sharkie',
      demoLink: 'https://pokedex.haehnlein-alexander.org/',
    },
  ];

  isEven(index: number): boolean {
    return index % 2 != 0;
  }
}
