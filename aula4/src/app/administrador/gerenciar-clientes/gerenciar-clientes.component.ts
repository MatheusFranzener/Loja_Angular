import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerenciar-clientes',
  templateUrl: './gerenciar-clientes.component.html',
  styleUrls: ['./gerenciar-clientes.component.css']
})
export class GerenciarClientesComponent implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  voltarPrincipal(){
    this.router.navigate(['']);
  }

}
