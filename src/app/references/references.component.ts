import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationService } from '../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [NgClass, TranslateModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  translate = inject(TranslationService);

  references = [
    {
      isHovered: true,
      evaluator: 'Mailo Mittelstädt',
      evalatorPosition: 'Team Partner',
      reference_de:
        'Alex beeindruckt mit seinem umfangreichen Wissen und seiner Expertise, die er gerne teilt. Seine analytischen Fähigkeiten lösen komplexe Probleme schnell, und er unterstützt das Team stets hilfsbereit.',
      reference:
        'Alex impresses with his extensive knowledge and expertise, which he gladly shares. His analytical skills solve complex problems quickly, and he is always helpful to the team.',
    },
    {
      isHovered: false,
      evaluator: 'Joel Sygulla',
      evalatorPosition: 'Team Partner',
      reference_de:
        'Alexander war eine große Bereicherung für unser Join-Projekt. Seine Fachkenntnisse und klare Kommunikation haben das Team sehr unterstützt. Es war eine Freude, mit ihm zu arbeiten.',
      reference:
        'Alexander was a great asset to our Join project. His expertise and clear communication significantly supported the team. It was a pleasure working with him.',
    },
    {
      isHovered: false,
      evaluator: 'Jonas Mahlburg',
      evalatorPosition: 'Team Partner',
      reference_de:
        'Die Zusammenarbeit mit Alexander war sehr produktiv. Er hat tiefes Fachwissen und ist schnell im Einarbeiten in neuen Code. Er ist ein hervorragender Teamplayer.',
      reference:
        'Working with Alexander was very productive. He has deep knowledge, quickly adapts to new code, and is an excellent team player.',
    },
  ];

  index: number = 0;

  onMouseEnter(index: number) {
    this.references.forEach((reference, i) => {
      reference.isHovered = i === index;
    });
  }
}
