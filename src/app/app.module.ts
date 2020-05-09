import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuotesComponent } from './quotes/quotes.component';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GoalDetailsComponent,
    QuoteFormComponent,
    QuotesComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
