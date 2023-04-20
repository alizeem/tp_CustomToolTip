import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appCustomToolTip]'
})
export class CustomToolTipDirective {

  @Input() customToolTipPosition: string="";
  @Input() customTooltipContent: string="Afficher l'infobulle";
  
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.changeToolType(this.customTooltipContent); 
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.changeToolType('');
  }

  private changeToolType(toolType: string) {
    this.renderer.setAttribute(this.el.nativeElement, 'appCustomToolTip', toolType);
  }



}
