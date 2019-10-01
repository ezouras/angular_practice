import {Directive,ElementRef,OnInit} from '@angular/core';

@Directive({
	//selector:"appHighlight" you need 
	//to add [apphighlight]
	//in your html files to recognize 
	//this property
	selector:"[appHighlight]" //now you 
	//don't need the "[]" in the html files. 
})
export class HighlightDirective implements OnInit{
	constructor(private elementRef:ElementRef){
		//type HAS to be element Ref.
		//this is being injected. 

		//adding "private" is a shortcut to 
		//seting a property in this class called 
		//elementRef and setting it to what ever is 
		//passed in the constructor 
	
//inject an element into this class, then do 
//what it says to that element on ngOnInit
	}

	ngOnInit(){
		this.elementRef.nativeElement.style.backgroundColor="green";

	}

}