import {Directive,ElementRef} from '@angular/core';

@Directive({
  selector:'[my-error]' //call this directive my-error
  //note the "my" prefix.  create a common prefix to use that is not already used.
  //in other words don't use 'ng' ie' ngIf
})

export class MyErrorDirective{
  constructor(elr:ElementRef){//in order to access any element in the dom
    elr.nativeElement.style.background = 'red';
  }
}
