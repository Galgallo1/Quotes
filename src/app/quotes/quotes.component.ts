import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes=[

    new Quotes(1,"if you want to cut a tree, sharpen your axe first", "a Lincoln", "Galgallo", new Date(2020, 6, 6), 0, 0),
    new Quotes(2,"Education is the most powerful weapon to change the world", "Mandela", "TD", new Date(2029, 8, 6), 0, 0),
    new Quotes(1,"Dont be afraid to be different", "Steve Jobs", "Galgallo", new Date(2020, 4, 10), 0, 0)


  ]

  toggleDetails(index){
    this.quotes[index].showAuthor=!this.quotes[index].showAuthor
    this.quotes[index].showDescription=!this.quotes[index].showDescription
  }
  constructor() { }

  ngOnInit(): void {
  }

}
