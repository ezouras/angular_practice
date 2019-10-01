import {Directive,onInit,Renderer2,ElementRef,HostListener,HostBinding,Input} from "@angular/core"

@Directive({
	selector:"[appBetterHighlight]"
})

export class BetterHighlightDirective implements onInit(){
	@Input() defaultColor:string="transparent";
	@Input() highlightColor:string="lime";


	constructor(private elementRef:ElementRef, private renderer: Renderer2){
	}


	ngOnInit(){
		this.renderer.setStyle(this.elementRef.nativeElement,"background-color",'blue')
		//pass the element to set, what you want to set, what you want to set it to. 
		//you can add another property we dont have. 
		// we coudl set it to "!important" or something like that

	}
	@HostListener("mouseenter") mouseoveranynamehere(eventData: Event){

		this.renderer.setStyle(this.elementRef.nativeElement,"background-color",'pink')
		this.border="";

	}
	@HostListener("mouseleave") mouseleavethiscoudlbeanyname(eventData: Event){

		this.renderer.setStyle(this.elementRef.nativeElement,"background-color",'purple')
		this.border="5px solid green";


	}
	@HostBinding('style.border') border:string="2px solid black";
	//how you can use "border" anywhere here to change it 
	//based on soem event. 
	@HostBinding('style.backGround') backgroundColor:string=this.highlightColor;
	//this color is from the @INput() value
}