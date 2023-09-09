import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { IngresarPageRoutingModule } from './ingresar-routing.module';
import { IngresarPage } from './ingresar.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresarPageRoutingModule,
    ReactiveFormsModule,
    HeaderModule
  ],
  declarations: [IngresarPage]
})
export class IngresarPageModule {}
