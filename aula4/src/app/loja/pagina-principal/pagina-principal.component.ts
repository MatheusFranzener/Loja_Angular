import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit() {
  }

  abrirPaginaProduto(){
    this.router.navigate(['/produto/'])
  }

  abrirPaginaGerenciar(){
    this.router.navigate(['/gerenciar-clientes'])
  }

  abrirPaginaLogin(){
    this.router.navigate(['/login'])
  }

  


}
