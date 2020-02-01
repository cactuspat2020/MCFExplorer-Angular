import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { McfSpaComponent } from './mcf-spa/mcf-spa.component';
import { SettingsDialogComponent } from './mcf-spa/mcf-spa.component';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ConfigurationService } from './services/configuration.service';
import { MwsApiService } from './services/mws-api.service';
import { SpectrumApiService } from './services/spectrum-api.service'


@NgModule({
  declarations: [
    HomepageComponent,
    InventoryComponent,
    McfSpaComponent,
    ShippingComponent,
    OrdersComponent,
    SettingsDialogComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSelectModule,
  ],
  exports: [
    HomepageComponent,
    InventoryComponent,
    SettingsDialogComponent,
    McfSpaComponent,
  ],
  providers: [
    ConfigurationService,
    MwsApiService,
    SpectrumApiService,
    CookieService
   ],
  entryComponents: [ SettingsDialogComponent, InventoryComponent, McfSpaComponent]
})
export class MCFModule { }
