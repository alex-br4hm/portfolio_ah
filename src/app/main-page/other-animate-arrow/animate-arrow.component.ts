import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-other-animate-arrow',
  standalone: true,
  imports: [],
  templateUrl: './animate-arrow.component.html',
  styleUrl: './animate-arrow.component.scss',
})
export class OtherAnimateArrowComponent implements AfterViewInit {
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
