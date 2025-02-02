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
      imgSrc: './assets/img/pokedex2.png',
      title: 'Pokedex',
      description: 'A fast and easy-to-use Pokédex. Search by name, filter by type, generation, weight & height.',
      description_de: 'Ein schneller Pokédex. Suche nach Namen, filtere nach Typ, Generation, Gewicht & Größe.',
      technologies: ['Angular', 'TypeScript', 'Angular Material', 'Firebase', 'HTML', 'SCSS'],
      gitLink: 'https://github.com/alex-br4hm/pokedex-angular',
      demoLink: 'https://pokedex2.haehnlein-alexander.org/',
    },
    {
      imgSrc: './assets/img/join.svg',
      title: 'Join',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      description_de:
        'Ein Task Manager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mithilfe von Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.',

      technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      gitLink: 'https://github.com/alex-br4hm/Join',
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
  ];

  isEven(index: number): boolean {
    return index % 2 != 0;
  }
}
