import {Component, Input, OnInit} from '@angular/core';
import {Asset} from '../models/models';
import {assembleBoundTextPlaceholders} from '@angular/compiler/src/render3/view/i18n/util';

@Component({
  selector: 'app-financial-asset',
  templateUrl: './financial-asset.component.html',
  styleUrls: ['./financial-asset.component.scss']
})
export class FinancialAssetComponent implements OnInit {

  // @ts-ignore
  @Input() asset: Asset;

  constructor() { }

  ngOnInit(): void {
    console.log(this.asset.name);
  }

}
