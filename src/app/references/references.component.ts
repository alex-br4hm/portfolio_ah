import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  references = [
    {
      evaluator: 'Mailo Mittelstädt',
      evalatorPosition: 'Team Partner',
      reference:
        'Alex beeindruckt in Gruppenarbeiten durch sein umfangreiches Wissen und seine Expertise, die er stets bereitwillig mit dem Team teilt. Seine analytischen Fähigkeiten und präzisen Beiträge sorgen dafür, dass komplexe Probleme schnell und effektiv gelöst werden. Darüber hinaus ist Alex immer hilfsbereit und unterstützt seine Teammitglieder dabei, ihr Verständnis zu vertiefen und gemeinsam beste Ergebnisse zu erzielen.  ',
    },
    {
      evaluator: 'Joel Sygulla',
      evalatorPosition: 'Team Partner',
      reference:
        'Es war eine große Bereicherung, Alexander bei unserem Projekt Join als Projektpartner zu haben. Er konnte durch seine hervorragenden Fachkenntnisse viel zum Team beitragen und uns Kollegen gut unterstützen. Ich habe einiges von ihm gelernt und seine klaren und effektiven Kommunikationsfähigkeiten haben die Zusammenarbeit im Team erheblich verbessert. Es hat Spaß gemacht, mit ihm zusammenzuarbeiten, und ich kann ihn ohne Zweifel weiterempfehlen.',
    },
    {
      evaluator: 'Jonas Mahlburg',
      evalatorPosition: 'Team Partner',
      reference:
        'Mit Alexander in einem Team zusammen arbeiten zu dürfen war eine gute produktive Erfahrung. Alexander hat ein sehr gutes Wissen, über die Materie, konnte sich auch schnell in anderen Code einarbeiten und verstehen und ist ein prima Teamarbeiter. Über eine weitere Zusammenarbeit wäre ich sehr froh 🙂 ',
    },
  ];
}
