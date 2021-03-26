import {Component, Input, OnInit} from '@angular/core';
import {CryptoCurrency} from '../models/models';

@Component({
  selector: 'app-crypto-currency',
  templateUrl: './crypto-currency.component.html',
  styleUrls: ['./crypto-currency.component.scss']
})
export class CryptoCurrencyComponent implements OnInit {

  @Input() crypto: CryptoCurrency;
  @Input() loadedArr: Array<boolean>;
  historicalData: any;
  chartOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.constructHistoricalDataSet();
  }

  constructHistoricalDataSet(): void {
    const weekLabels = this.crypto.weekPriceData.map(day => day.date).reverse();
    const highPrices = this.crypto.weekPriceData.map(day => day.highPrice).reverse();
    this.historicalData = {
      labels: weekLabels,
      datasets: [
        {
          label: 'High Price Over 7 Days',
          data: highPrices,
          fill: false,
          borderColor: '#42A5F5'
        }
      ]
    };
    this.chartOptions = {
      responsive: false,
      maintainAspectRatio: false,
      legend: {
        labels: {
          fontColor: '#ebedef'
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: '#ebedef'
          },
          gridLines: {
            color: 'rgba(255,255,255,0.2)'
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: '#ebedef'
          },
          gridLines: {
            color: 'rgba(255,255,255,0.2)'
          }
        }]
      }
    };
  }

}
