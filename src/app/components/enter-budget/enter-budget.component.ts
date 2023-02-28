import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-enter-budget',
  templateUrl: './enter-budget.component.html',
  styleUrls: ['./enter-budget.component.css']
})
export class EnterBudgetComponent {
  amount: number;
  wrongAmount: boolean;

  constructor (private _budgetService: BudgetService, 
               private router: Router) {
    this.amount = 0;
    this.wrongAmount = false;
  }

  add () {
    if (this.amount > 0) {
      this.wrongAmount = false;
      this._budgetService.budget = this.amount;
      this._budgetService.remainingBudget = this.amount;
      this.router.navigate(['/expenses']);
    } else {
      this.wrongAmount = true;
    }  
  }

}
