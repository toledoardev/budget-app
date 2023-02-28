import { Component } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-enter-expenses',
  templateUrl: './enter-expenses.component.html',
  styleUrls: ['./enter-expenses.component.css']
})
export class EnterExpensesComponent {
  expenseName: string;
  expenseAmount: number;
  wrongForm: boolean;
  wrongText: string;

  constructor (private _budgetService: BudgetService) {
    this.expenseName = '';
    this.expenseAmount = 0;
    this.wrongForm = false;
    this.wrongText = '';
  }

  addExpense() {
    if ( this.expenseAmount > this._budgetService.remainingBudget ) {
      this.wrongForm = true;
      this.wrongText = 'Expense cannot be greater than budget amount.'; 
      return;
    }

    if ( this.expenseName === '' || this.expenseAmount <= 0 ) {
      this.wrongForm = true;
      this.wrongText = 'Expense name or amount is wrong.'; 
    } else {
      
      const EXPENSE = {
        name: this.expenseName,
        amount: this.expenseAmount
      }

      this._budgetService.addExpense(EXPENSE);

      this.wrongForm = false;
      this.expenseName = '';
      this.expenseAmount = 0;
    }

  }

}
