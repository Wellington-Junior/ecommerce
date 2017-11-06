import { AuthService } from './auth.service';
import { TokenService } from './token.service';
import { INGRESSOS_API } from '../app.api';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable, Inject, OnInit } from '@angular/core';
import { EventoModel } from '../models/evento.model';

@Injectable()
export class IngressoService{
       
    
    constructor(
        //private tipoIngresso:TipoIngressoModel,
        public tokenHeader:TokenService,
        public authService:AuthService,
        private http:Http
    ){ }
    
    gerarIngresso(idcompra){
       return this.http.get(`${INGRESSOS_API}/ingresso/gerar/${idcompra}`,
       this.tokenHeader.getJsonHeaders(this.authService.getToken()))
            .map(response=>response.json().data)
    }

}