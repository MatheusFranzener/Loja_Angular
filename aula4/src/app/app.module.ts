import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {AdministradorModule} from './administrador/administrador.module';
import {ClienteModule} from './cliente/cliente.module';
import {LojaModule} from './loja/loja.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AdministradorModule,
    ClienteModule,
    LojaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
