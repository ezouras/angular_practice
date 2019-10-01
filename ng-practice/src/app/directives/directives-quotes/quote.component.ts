import {Component, Input} from "@angular/core";

@Component({
  selector:"components-quote",
  templateUrl: './quote.component.html',
  styleUrls: []
})

export class QuotesComponent{

  getPoliticianName():string{
      return "Abraham Lincoln"
  }

  politicianPosition:string="U.S. President";

}
