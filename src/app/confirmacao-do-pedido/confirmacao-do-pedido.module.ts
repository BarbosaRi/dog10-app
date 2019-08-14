import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfirmacaoDoPedidoPage } from './confirmacao-do-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacaoDoPedidoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfirmacaoDoPedidoPage]
})
export class ConfirmacaoDoPedidoPageModule {}
