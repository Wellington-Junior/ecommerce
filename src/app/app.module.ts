import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

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
import { DetalheComponent } from './components/detalhe/detalhe.component'

import {EventoService} from './service/evento.service';
import { VendaService } from './service/venda.service';
import { TokenService } from './service/token.service';
import { IngressoService } from './service/ingresso.service';
import { CarrinhoService } from './service/carrinho.service';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth.guard';

import { VendaModel } from './models/venda.model';
import { UsuarioModel } from './models/usuario.model';
import { TipoingressoModel } from './models/tipoingresso.model';
import { LoginModel } from './models/login.model';
import { IngressoModel } from './models/ingresso.model';
import { EventoModel } from './models/evento.model';

import { AgmCoreModule,GoogleMapsAPIWrapper } from '@agm/core';
import { GerarIngressoComponent } from './components/gerar-ingresso/gerar-ingresso.component';


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
    VendaComponent,
    DetalheComponent,
    GerarIngressoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCV4nqwrTbI6RKhIZuy3nOsqRLF1dNwKbI',
      libraries: ["places"]
    })
  ],
  providers: [
    EventoService,
    AuthService,
    CarrinhoService,
    IngressoService,
    TokenService,
    VendaService,
    EventoModel,
    IngressoModel,
    LoginModel,
    TipoingressoModel,
    UsuarioModel,
    VendaModel,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
