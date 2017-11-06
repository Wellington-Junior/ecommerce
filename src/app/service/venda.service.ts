import { AuthService } from './auth.service';
import { TokenService } from './token.service';
import { INGRESSOS_API } from './../app.api';
//import { TipoIngressoModel } from './../model/tipoingresso.model';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable, Inject, OnInit } from '@angular/core';
import { VendaModel } from '../models/venda.model';

@Injectable()
export class VendaService{
       
    venda:string;
    constructor(
        //private tipoIngresso:TipoIngressoModel,
        public tokenHeader:TokenService,
        public authService:AuthService,
        private http:Http
    ){ 
        
    }

    ingressos = {
    artista:'',
    data:'',
    idingresso:'',
    local:'',
    tipo:'',
    valor:'',
    idtipoingresso:''
  }

    salvarVenda(venda){
        //limpar a memoria local storage antes de salvar
        console.log(venda);
        this.http.post(`${INGRESSOS_API}/venda/novo`,venda,
        this.tokenHeader.getJsonHeaders(this.authService.getToken()))
            .subscribe((response)=>{
             this.ingressos = response.json()
             localStorage.setItem('venda',JSON.stringify(this.ingressos))
             console.log(localStorage.venda)
         });
    }

    getDataAtual(){
        
    }

}