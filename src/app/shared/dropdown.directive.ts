import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  //Dynamically attach  to the class property 
  @HostBinding('class.open') isOpen = false;

  //Listens for a click event and executes toggleOpen
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
