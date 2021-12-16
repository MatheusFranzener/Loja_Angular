import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  listaProdutos = [
    1,3,55,4,33,122,889,334
  ]

  constructor(
    private router:Router,
  ) {}

  ngOnInit() {
  }

  abrirProduto(produto){
    this.router.navigate(['/loja/produto/'+ produto])
  }

  voltarPrincipal(){
    this.router.navigate(['']);
  }

  logout(){
    localStorage.removeItem('USER');
  }

}
