import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresenteProduitPageRoutingModule } from './presente-produit-routing.module';

import { PresenteProduitPage } from './presente-produit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresenteProduitPageRoutingModule
  ],
  declarations: [PresenteProduitPage]
})
export class PresenteProduitPageModule {}
