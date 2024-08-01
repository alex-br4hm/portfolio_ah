import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent implements AfterViewInit {
  @ViewChild('arrowImg') arrowImg!: ElementRef;
  @ViewChild('arrowWrapper') arrowWrapper!: ElementRef;

  ngAfterViewInit() {
    const imgElement = this.arrowImg.nativeElement;
    const wrapperElement = this.arrowWrapper.nativeElement;

    this.arrowImg.nativeElement.addEventListener('animationend', () => {
      wrapperElement.classList.remove('to-animate');
      imgElement.classList.add('animated');
    });
  }
}
