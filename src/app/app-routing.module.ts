import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MCFModule } from './mcf/mcf.module';
import {HomepageComponent} from './mcf/pages/homepage/homepage.component';
import {InventoryComponent} from './mcf/pages/inventory/inventory.component';
import {McfSpaComponent} from './mcf/mcf-spa/mcf-spa.component';



const routes: Routes = [
  { path: '', component: McfSpaComponent },
  { path: 'login', component: HomepageComponent },
  { path: 'inventory', component: InventoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  MCFModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
