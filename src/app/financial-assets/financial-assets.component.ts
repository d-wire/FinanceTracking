import {ChangeDetectorRef, Component, OnInit, Output} from '@angular/core';
import {Asset, CryptoCurrency, CryptoPrimitive, User} from '../models/models';
import {CryptoDataService} from '../services/crypto-data.service';
import {CRYPTO} from '../models/constants';

@Component({
  selector: 'app-financial-assets',
  templateUrl: './financial-assets.component.html',
  styleUrls: ['./financial-assets.component.scss']
})
export class FinancialAssetsComponent implements OnInit {

  user: User = {first_name: 'Liam', last_name: 'Dwyer', net_worth: 0, assets: new Map<string, Array<Asset>>()};
  testCrypto: Array<CryptoPrimitive> = [{id: 'ADA', amount: 10}];
  displayAssetForm = false;
  initialHistoricalDataRetrieved = false;

  constructor(private cryptoService: CryptoDataService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.user.assets[CRYPTO] = this.testCrypto;
    this.populateCryptoData(this.user.assets[CRYPTO]);
    this.user.assets[CRYPTO].forEach((crypto, index) => {
      this.populateHistoricalData(crypto, index, true);
    });

    this.changeDetectorRef.detectChanges();
  }

  public populateCryptoData(cryptos: Array<CryptoCurrency>): void {
    const tmpArr = new Array<string>();
    cryptos.forEach((crypto) => {
      tmpArr.push(crypto.id);
    });
    this.cryptoService.getCryptoData(tmpArr.join(','))
      .subscribe((data) => {
        data.forEach(returnVal => {
          const index = this.user.assets[CRYPTO].findIndex(crypto => crypto.id === returnVal.id);
          if (index >= 0) {
            const tmpAmount = this.user.assets[CRYPTO][index].amount;
            this.user.assets[CRYPTO][index] = returnVal;
            this.user.assets[CRYPTO][index].amount = tmpAmount;

            this.calculateCryptoNetWorth(this.user.assets[CRYPTO][index]);
          }
        });
      });
  }

  public populateHistoricalData(cryptoPrimitive: CryptoPrimitive, index: number, initialization: boolean): void {
    let weekPriceData: any;
    this.cryptoService.getHistoricalData(cryptoPrimitive.id)
      .subscribe(res => {
          weekPriceData = res;
        },
        (err) => {
          console.log(err);
        },
        () => {
          if (!initialization) {
            this.user.assets[CRYPTO].push(cryptoPrimitive);
            this.populateCryptoData(this.user.assets[CRYPTO]);
          }
          else {
            this.initialHistoricalDataRetrieved = true;
          }
          this.user.assets[CRYPTO][index].weekPriceData = weekPriceData;
        });
  }

  public calculateCryptoNetWorth(crypto: CryptoCurrency): void {
    this.user.net_worth += (crypto.price * crypto.amount);
  }

  public addCrypto(cryptoPrimitive: CryptoPrimitive): void {
    // Index can't be length - 1 because we want to use a future index here
    this.populateHistoricalData(cryptoPrimitive, this.user.assets[CRYPTO].length, false);
    this.displayAssetForm = false;
  }

  public trackByCryptoId(index: number, crypto: CryptoCurrency): string {
    return crypto.id;
  }

  public removeAsset(asset: Asset, category: string): void {
    const index = this.user.assets[category].indexOf(asset);
    if (index !== -1) {
      this.user.assets[category].splice(index, 1);
    }
  }

  public showAddAssetForm(): void {
    this.displayAssetForm = true;
  }

}
