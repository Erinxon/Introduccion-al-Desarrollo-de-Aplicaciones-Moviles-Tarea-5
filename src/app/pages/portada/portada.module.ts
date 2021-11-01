import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortadaPageRoutingModule } from './portada-routing.module';

import { PortadaPage } from './portada.page';
import { SharedPageModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortadaPageRoutingModule,
    SharedPageModule
  ],
  declarations: [PortadaPage]
})
export class PortadaPageModule {}
