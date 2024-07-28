import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../models/invest.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  calculate = output<InvestmentInput>();

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedRetrun = '5';
  enteredDuration = '10';

  onSubmit(){
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedRetrun,
      annualInvestment: +this.enteredAnnualInvestment
    });
  }

}
