import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes=[

    new Quotes(1,"if you want to cut a tree, sharpen your axe first", "A Lincoln", "Galgallo", new Date(2020, 4, 8), 0, 0),
    new Quotes(2,"Education is the most powerful weapon to change the world", "Mandela", "TD", new Date(2020, 4, 8), 0, 0),
    new Quotes(3,"Dont be afraid to be different", "Steve Jobs", "Galgallo", new Date(2020, 4, 8), 0, 0)


  ]

  toggleDetails(index){
    this.quotes[index].showAuthor=!this.quotes[index].showAuthor
    this.quotes[index].showPublisher=!this.quotes[index].showPublisher
  }

  deleteQuote(Complete,index){
    if(Complete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].body}`)

      if (toDelete){
        this.quotes.splice(index, 1);
      }
    }

  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    this.quotes.push(quote)

  }
  constructor() { }

  ngOnInit(): void {
  }

}
