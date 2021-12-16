import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos/produtos.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ProdutoComponent } from './produto/produto.component';
import { Routes,RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: PaginaPrincipalComponent},
  {
    path: 'produto', children: [
      {path: '', component: ProdutosComponent},
      {path: ':id', component: ProdutoComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [ProdutosComponent, PaginaPrincipalComponent, ProdutoComponent],
  exports:[ProdutosComponent]
})
export class LojaModule { }
