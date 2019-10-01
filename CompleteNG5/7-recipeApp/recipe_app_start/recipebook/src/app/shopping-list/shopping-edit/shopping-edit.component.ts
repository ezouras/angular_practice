//4. removing view child and changing to form control
//import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Component, OnInit,OnDestroy,ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingService} from '../shopping.service';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

//this is the "form" in the html: <form (ngSubmit)="addShoppingItem(form)" #form="ngForm">
  @ViewChild("form") shoppingListform:NgForm;
  private subscription:Subscription;
  editMode=false;
  edittedItemIndex:number;
  edittedItem:Ingredient;

//use @Viewchild to use local # reference in html
/* 4/ adding form control to capture data and adding in firebase database
@ViewChild('nameInput') nameOfShoppingItem:ElementRef;
@ViewChild('amountInput') amountOfShoppingItem:ElementRef;
*/
//@Output() shoppingItemAdded=new EventEmitter<Ingredient>();
//create a new event  that returns shopping item object

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.subscription=this.shoppingService.edittingStarted.subscribe(
      (id:number)=>{
        //we are here if the user click on "start editing"
        this.editMode=true;
        this.edittedItemIndex=id;
        this.edittedItem=this.shoppingService.getIngredient(id);
        this.shoppingListform.setValue({
          name:this.edittedItem.name,
          amount:this.edittedItem.amount
        })

      }

      )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  editShoppingItem(form: NgForm){
    /* we have added the ternary otuput for hte "add" button 
    // so tha it is is a condition.  if you click on an item, 
    // the button changes to "update" otherwise it's "add"


    /* removing the view child in liew of form control
  	const ingredientName=this.nameOfShoppingItem.nativeElement.value;
  	const ingredientAmount=this.amountOfShoppingItem.nativeElement.value;
    */
  	const newIngredient= new Ingredient(form.value.name,form.value.amount);
    if(this.editMode){
      this.shoppingService.updateIngredient(this.edittedItemIndex,newIngredient);
    }
    else{
  	//this.shoppingItemAdded.emit(newIngredient);
    //this.shoppingService.ingredientAddedEvent.emit(newIngredient);
    this.shoppingService.addIngredient(newIngredient)
  }
  this.editMode=false;
  form.reset();


  }

  onClear(){
    this.shoppingListform.reset();
    this.editMode=false;
  }

  onDelete(){
    this.shoppingService.deleteIngredient(this.edittedItemIndex);
    this.editMode=false;
    this.shoppingListform.reset();
  }

}
