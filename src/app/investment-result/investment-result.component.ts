import { Component, DEFAULT_CURRENCY_CODE, inject } from '@angular/core';
import { InvestmentOutput } from '../models/invest.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../../services/invest.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  providers: [ { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {

  private investmentService = inject(InvestmentService);

  results = this.investmentService.resultData.asReadonly();


}
