import {Component} from '@angular/core';
import {
	trigger,
	state,
	style,
	transition,
	animate
} from '@angular/animations';

//@component decorator makes 
//this class a component. 
// it defines it's selector, 
// and the template it will use for display. 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  //should have at least two states.  
  //you're transitioning from one thing 
  //to another. 

  animations:[
  	trigger("div_animation",[
  		state("normal",style({
  			'background-color':'red',
  			'transform':'translateX(0)'

  		})),
  		state("highlighted",style({
  			'background-color':"blue",
  			'transform':'translateX(100px)'
  		})),//transition- how to move from one state to another 
  		//=> one direction. 
  		//<=> both directions
  		/* the following two is for one going  from 
  		normal to highlighted. but we can do both on one line
  		transition('normal=>highlighted',animate(300)),
  		transition('highlighted=>normal',animate(800))
  		*/
  		transition('normal<=>highlighted',animate(300))
  		]),

  	trigger("div_wild_animation",[
  		state("normal",style({
  			'background-color':'red',
  			'transform':'translateX(0) scale(1)'

  		})),
  		state("highlighted",style({
  			'background-color':"blue",
  			'transform':'translateX(100px) scale(1)'
  		})),
  		state("shrunk",style({
  			'background-color':"green",
  			'transform':'translateX(0) scale(0.5)'
  		})),
  		transition('normal=>highlighted',animate(300)),
  		transition('highlighted=>normal',animate(800)),

  		])

  ]
})

export class AppComponent {
  state="normal";
  wild_state="normal"
  list = ['Milk', 'Sugar', 'Bread'];

    onAdd(item) {
      this.list.push(item);
    }

    onAnimate(){
    	this.state=="normal" ? this.state="highlighted":this.state="normal";
    	console.log("button animate clicked!")
    }

    onShrink(){
    	this.wild_state="shrunk";
    	console.log("shrink button clicked!")
    }
}
