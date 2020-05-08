import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes=[

    new Quotes(1,"if you want to cut a tree, sharpen your axe first", "Unkown", "Galgallo", new Date(2020, 6, 6), 0, 0)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
