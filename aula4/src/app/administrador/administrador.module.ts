import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenciarProdutosComponent } from './gerenciar-produtos/gerenciar-produtos.component';
import { GerenciarClientesComponent } from './gerenciar-clientes/gerenciar-clientes.component';
import {LojaModule} from '../loja/loja.module';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../cliente/login/login.component';

const routes: Routes = [
  { path: 'gerenciar-produtos', component: GerenciarProdutosComponent},
  { path: 'gerenciar-clientes', component: GerenciarClientesComponent},
  {path:'login', component:LoginComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    LojaModule
  ],
  declarations: [GerenciarProdutosComponent, GerenciarClientesComponent],
  exports: [GerenciarProdutosComponent, GerenciarClientesComponent]
})
export class AdministradorModule { }
