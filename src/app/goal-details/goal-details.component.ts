import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quotes } from '../quotes'


@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {

  @Input() quotes:Quotes;
  @Output() Complete= new EventEmitter<boolean>();

  like(quotes){
    quotes.likes +=1
  }

  unlike(quotes){
    quotes.unlikes +=1
  }

  quoteDelete(complete:boolean){
    this.Complete.emit(complete);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
