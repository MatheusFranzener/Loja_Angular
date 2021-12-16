import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  logar(){
    localStorage.setItem('USER',this.user);
    this.router.navigate(['/loja/produto'])
  }
}
