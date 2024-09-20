import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../models/invest.model';
import { InvestmentService } from '../../services/invest.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedRetrun = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService: InvestmentService){}

  onSubmit(){

    this.investmentService.CalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedRetrun(),
      annualInvestment: +this.enteredAnnualInvestment()
    });

    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedRetrun.set('5');
    this.enteredDuration.set('10');

  }

}
