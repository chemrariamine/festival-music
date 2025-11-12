import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective {
 @Input('appHighlight') color = '#fffbcc';
  private originalBg = '';

  constructor(private el: ElementRef, private r: Renderer2) {
    this.originalBg = this.el.nativeElement.style.background;
  }

  @HostListener('mouseenter') onEnter() {
    this.r.setStyle(this.el.nativeElement, 'background', this.color);
  }
  @HostListener('mouseleave') onLeave() {
    this.r.setStyle(this.el.nativeElement, 'background', this.originalBg);
  }

}
