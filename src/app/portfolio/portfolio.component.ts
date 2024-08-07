import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgClass],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects = [
    {
      imgSrc: './assets/img/join.png',
      title: 'Join',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      gitLink: '',
      demoLink: 'https://pokedex.haehnlein-alexander.org/',
    },
    {
      imgSrc: './assets/img/sharkie.png',
      title: 'Sharkie',
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help Sharkie to find coins and poison bottles to fight against the killer whale.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      gitLink: '',
    },
    {
      imgSrc: './assets/img/join.png',
      title: 'Join',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      gitLink: '',
    },
    {
      imgSrc: './assets/img/sharkie.png',
      title: 'Sharkie',
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help Sharkie to find coins and poison bottles to fight against the killer whale.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      gitLink: '',
    },
  ];

  isEven(index: number): boolean {
    return index % 2 != 0;
  }
}
