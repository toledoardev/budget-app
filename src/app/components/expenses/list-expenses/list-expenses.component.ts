import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit, OnDestroy {
  suscription: Subscription;
  budget: number;
  remaining: number;
  expensesList: any[] = [];
  
  constructor (private _budgetService: BudgetService) {
    this.budget = 0;
    this.remaining = 0;
    this.suscription = this._budgetService.getExpenses().subscribe(data => {
      this.remaining = this.remaining - data.amount;
      this.expensesList.push(data);
    })
  }

  ngOnInit(): void {
    this.budget = this._budgetService.budget;
    this.remaining = this._budgetService.remainingBudget;
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }
}
