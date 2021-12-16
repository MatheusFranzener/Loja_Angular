import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import CheckLogged from './checkLogged.canactivate';
import { AppComponent } from './app.component';
import {AdministradorModule} from './administrador/administrador.module';
import {ClienteModule} from './cliente/cliente.module';
import {LojaModule} from './loja/loja.module';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
      path: '',
      component: MainComponent,
      canActivate: []
    }
  ]),
    BrowserModule,
    AdministradorModule,
    ClienteModule,
    LojaModule,
    FormsModule,
  ],
  providers: [CheckLogged],
  bootstrap: [AppComponent]
})
export class AppModule { }
