import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'lightblue';

  constructor(private elRef: ElementRef, private renderer: Renderer2){  }

  @HostListener('mouseenter') mouseover(eventData: Event){ //Changes to yellow when hovered over
    this.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.backgroundColor = 'transparent';
  }

  /* USED WITHOUT @HostBinding
  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
  }
  @HostListener('mouseenter') mouseover(eventData: Event){ //Changes to yellow when hovered over
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow'); 
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }
  */
}
