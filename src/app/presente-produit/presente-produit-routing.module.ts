import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresenteProduitPage } from './presente-produit.page';

const routes: Routes = [
  {
    path: '',
    component: PresenteProduitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresenteProduitPageRoutingModule {}
