import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quotes } from '../quotes'


@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {

  @Input() quotes:Quotes;
  @Output() complete= new EventEmitter<boolean>();

  like(quotes){
    quotes.likes +=1
  }

  unlike(quotes){
    quotes.unlikes +=1
  }


  constructor() { }

  ngOnInit(): void {
  }

}
