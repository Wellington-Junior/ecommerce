import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './components/topo/topo.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { ContainerComponent } from './components/container/container.component';
import { IngressoComponent } from './components/ingresso/ingresso.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { VendaComponent } from './components/venda/venda.component';

import {EventoService} from './service/evento.service'

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    ContainerComponent,
    IngressoComponent,
    HomeComponent,
    LoginComponent,
    CarrinhoComponent,
    VendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [EventoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
