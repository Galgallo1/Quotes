import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {

  @Input() quotes:Quotes;

  


  constructor() { }

  ngOnInit(): void {
  }

}
