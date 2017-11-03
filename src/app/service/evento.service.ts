//import { TipoIngressoModel } from './../model/tipoingresso.model';
import { INGRESSOS_API,INGRESSOS_OAPI } from '../app.api';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable, Inject, OnInit } from '@angular/core';
import { EventoModel } from '../models/evento.model';

@Injectable()
export class EventoService{
       
    
    constructor(
        private http:Http
    ){ 
        
    }

    getEventosListar(){
      return this.http.get(`${INGRESSOS_OAPI}/eventos`)
    }

    getEvento(evento:EventoModel){
      return this.http.get(`${INGRESSOS_OAPI}/evento/${evento.idevento}`);
    }

    getAllTipoIngressos(evento:EventoModel){
      return this.http.get(`${INGRESSOS_OAPI}/tipoingressos/${evento.idevento}`)
        .map(response=>response.json().data)
    }

}