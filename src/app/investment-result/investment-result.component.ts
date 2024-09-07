import { Component, DEFAULT_CURRENCY_CODE, input } from '@angular/core';
import { InvestmentOutput } from '../models/invest.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  providers: [ { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  results = input<InvestmentOutput[]>();

}
