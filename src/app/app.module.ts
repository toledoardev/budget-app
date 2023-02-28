//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { EnterBudgetComponent } from './components/enter-budget/enter-budget.component';
import { EnterExpensesComponent } from './components/expenses/enter-expenses/enter-expenses.component';
import { ListExpensesComponent } from './components/expenses/list-expenses/list-expenses.component';


@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    EnterBudgetComponent,
    EnterExpensesComponent,
    ListExpensesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
