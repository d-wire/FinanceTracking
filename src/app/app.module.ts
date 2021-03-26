import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FinancialAssetsComponent } from './financial-assets/financial-assets.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FinancialAssetComponent } from './financial-asset/financial-asset.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {HttpClientModule} from '@angular/common/http';
import { CryptoCurrencyComponent } from './crypto-currency/crypto-currency.component';
import { AssetFormComponent } from './asset-form/asset-form.component';
import {FormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {PanelMenuModule} from 'primeng/panelmenu';
import {PanelModule} from 'primeng/panel';
import {RippleModule} from 'primeng/ripple';
import {InputNumberModule} from 'primeng/inputnumber';
import {DatePipe} from '@angular/common';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FinancialAssetsComponent,
    FinancialAssetComponent,
    SidenavComponent,
    CryptoCurrencyComponent,
    AssetFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    CardModule,
    PanelModule,
    ButtonModule,
    RippleModule,
    InputNumberModule,
    ChartModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
