import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @Output () addGoal= new EventEmitter<Quotes>();
  newQuotes= new Quotes(0, "", "", "", new Date(), 0, 0);
  
  constructor() { }

  ngOnInit(): void {
  }

}
