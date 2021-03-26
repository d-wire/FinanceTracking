import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as cryptocurrencies from 'cryptocurrencies';
import {CRYPTO} from '../models/constants';
import {CryptoPrimitive} from '../models/models';

@Component({
  selector: 'app-asset-form',
  templateUrl: './asset-form.component.html',
  styleUrls: ['./asset-form.component.scss']
})
export class AssetFormComponent implements OnInit {

  assetOptions = ['CryptoCurrency'];
  selectedAssetOption = this.assetOptions[0];
  tmpArr: Array<string> = cryptocurrencies.symbols();
  availableCryptos: any;
  selectedCrypto: string;
  assetAmount: number;
  @Output() asset: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.availableCryptos = this.tmpArr.map(crypto => ({label: crypto, value: crypto}));
  }

  addAsset(): void {
    const cryptoPrimitive: CryptoPrimitive = {id: this.selectedCrypto, amount: this.assetAmount};
    this.asset.emit(cryptoPrimitive);
  }

}
