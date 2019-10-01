import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector:'[myCustomIf]'
})

export class MyCustomeIfDirective{
  //in the constructor are the injected depdency objects
  constructor(
    //a template. is passed to a method in order to create an embedded view.
    //that is, create a view within that template (embed it)
    private templateRef: TemplateRef<any>,
    private viewContainer:ViewContainerRef
    //how this directive gets access to the view container
    //from this, in the code an embedded view will be created and a template passed
  ){ console.log("template is ",templateRef)}

//input is used to pass data TO the component. That is,
//the conidtion is passed (either tru or false). an based on that,
//the view container is altered.
  @Input() set myCustomIf(condition:boolean){
    if(condition){
      this.viewContainer.createEmbeddedView(this.templateRef);
      //this creates the embedded view.
      //it represents a part of the layout ot be rendered
      //it's linked to the passed template.
      //one or more embedded views can be attached to the view container.
    }
    else{
      this.viewContainer.clear();
    }
  }
}
