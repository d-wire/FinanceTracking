import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CryptoCurrency, DailyPriceData, Interval} from '../models/models';
import {map} from 'rxjs/operators';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CryptoDataService {

  private baseUrl = 'https://api.nomics.com/v1';
  private apiKey = '8c47f196a4fa7869d427426b7c4432ba';

  alphaVantageBaseUrl = 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=';
  alphaVantageRemainingUrl = '&market=USD&apikey=9P4ZDZEQ37UV3SDD';

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  getCryptoData(ids: string): Observable<any> {
    return this.http.get<Array<CryptoCurrency>>(this.baseUrl + '/currencies/ticker?key=' + this.apiKey + '&ids=' + ids + '&interval=1d')
      .pipe(map(res => {
        // const crypto: CryptoCurrency = {amount: 0, id: res[0].id, name: res[0].name, logo_url: res[0].logo_url, price: +res[0].price,
        //       currency: res[0].currency, circulating_supply: +res[0].circulating_supply,
        //       high: +res[0].high, status: res[0].status, price_date: res[0].price_date, price_timestamp: res[0].price_timestamp,
        //       symbol: res[0].symbol, max_supply: +res[0].max_supply, market_cap: +res[0].market_cap,
        //       transparent_market_cap: +res[0].transparent_market_cap, num_exchanges: +res[0].num_exchanges, num_pairs: +res[0].num_pairs,
        //       num_pairs_unmapped: +res[0].num_pairs_unmapped, first_candle: res[0].first_candle,
        //       first_trade: res[0].first_trade, first_order_book: res[0].first_order_book, first_priced_at: res[0].first_priced_at,
        //       rank: +res[0].rank, rank_delta: +res[0].rank_delta, high_timestamp: res[0].high_timestamp,
        //       _1h: res[0]['1h'], _1d: res[0]['1d'], _30d: res[0]['30d'], _365d: res[0]['365d']};
        // console.log('Crypto: ');
        // console.log(crypto);
        // return crypto;
        return res;
      }));
      // .pipe(map(data => {
      //
      //   }
      // ));
  }

  getHistoricalData(cryptoId: string): Observable<any> {
    const dateArr = this.getPastWeek();
    const url = this.alphaVantageBaseUrl + cryptoId + this.alphaVantageRemainingUrl;
    return this.http.get<Array<DailyPriceData>>(url)
      .pipe(map(res => {
        const weekData = new Array<DailyPriceData>();
        const allDays = res['Time Series (Digital Currency Daily)'];
        dateArr.forEach(day => {
          const dayData: DailyPriceData = {date: day, openPrice: +allDays[day]['1a. open (USD)'],
            highPrice: +allDays[day]['2a. high (USD)'], lowPrice: +allDays[day]['3a. low (USD)'],
            closePrice: +allDays[day]['4a. close (USD)'], volume: +allDays[day]['5. volume'],
            marketCap: +allDays[day]['6. market cap (USD)']};
          weekData.push(dayData);
        });
        return weekData;
      }));
  }

  getPastWeek(): Array<string> {
    const dateArr = new Array<string>();
    const today = new Date();
    const todayFormatted = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    const yesterday = this.datePipe.transform(new Date().setDate(today.getDate() - 1), 'yyyy-MM-dd');
    const twoDaysAgo = this.datePipe.transform(new Date().setDate(today.getDate() - 2), 'yyyy-MM-dd');
    const threeDaysAgo = this.datePipe.transform(new Date().setDate(today.getDate() - 3), 'yyyy-MM-dd');
    const fourDaysAgo = this.datePipe.transform(new Date().setDate(today.getDate() - 4), 'yyyy-MM-dd');
    const fiveDaysAgo = this.datePipe.transform(new Date().setDate(today.getDate() - 5), 'yyyy-MM-dd');
    const sixDaysAgo = this.datePipe.transform(new Date().setDate(today.getDate() - 6), 'yyyy-MM-dd');
    dateArr.push(todayFormatted, yesterday, twoDaysAgo, threeDaysAgo, fourDaysAgo, fiveDaysAgo, sixDaysAgo);
    return dateArr;
  }
}
