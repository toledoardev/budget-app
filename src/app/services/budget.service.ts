import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  budget: number;
  remainingBudget: number;
  private expenses$ = new Subject<any>();

  constructor() { 
    this.budget = 0;
    this.remainingBudget = 0;
  }

  addExpense(expense: any){
    this.remainingBudget = this.remainingBudget - expense.amount;
    this.expenses$.next(expense);
  }

  getExpenses(): Observable<any> {
    return this.expenses$.asObservable();
  } 

}
