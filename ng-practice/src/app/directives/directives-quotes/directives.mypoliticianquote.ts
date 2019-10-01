import {Directive, Input,ElementRef,OnInit} from "@angular/core";

@Directive({
  selector:'[appQuote]'
})

export class QuoteDirective implements OnInit{
  @Input() politicianQuote: string;
  //these properties are determined thru the dom.
  //specificall thru the selector, this "politicalQuote" will be binded:
  //[politicianQuote]= "some property in the class that uses the selector"
  @Input() politicianAuthor:string;
  @Input() politicianPosition:string;

  constructor(private el:ElementRef){

  }

  ngOnInit(){
    this.el.nativeElement.innerHTML=
      `"${this.politicianQuote}" <br> - ${this.politicianAuthor} - ${this.politicianPosition}`;
  }

}
