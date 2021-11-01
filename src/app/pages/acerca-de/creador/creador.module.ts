import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreadorPageRoutingModule } from './creador-routing.module';

import { CreadorPage } from './creador.page';
import { SharedPageModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreadorPageRoutingModule,
    SharedPageModule
  ],
  declarations: [CreadorPage]
})
export class CreadorPageModule {}
