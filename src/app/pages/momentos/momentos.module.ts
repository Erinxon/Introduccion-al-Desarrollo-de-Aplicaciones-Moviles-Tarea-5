import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MomentosPageRoutingModule } from './momentos-routing.module';

import { MomentosPage } from './momentos.page';
import { SharedPageModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MomentosPageRoutingModule,
    SharedPageModule
  ],
  declarations: [MomentosPage]
})
export class MomentosPageModule {}
