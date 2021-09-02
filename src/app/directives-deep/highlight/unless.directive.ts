import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  //Will sit on a <ng-template> component
  @Input() set appUnless(condition: boolean) { //setter of 'unless' property
    if(!condition) { //Displays
      //Creates a view (templateRef) in this container (vcRef)
      this.vcRef.createEmbeddedView(this.templateRef); 
    }
    else {
      // Removes everything from the view
      this.vcRef.clear();
    }
  }
  //TemplateRef -> Access on the DOM (What)
  //ViewContainer -> Where to render view (Where)
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
