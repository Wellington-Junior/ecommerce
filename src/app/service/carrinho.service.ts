//import { TipoIngressoModel } from './../model/tipoingresso.model';
import { INGRESSOS_API } from './../app.api';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable, Inject, OnInit } from '@angular/core';
import { EventoModel } from '../models/evento.model';

@Injectable()
export class CarrinhoService {

    ingressos = [];
    total = 0;
    qtdCarrinho = 0;

    addIngressoCart(item) {
        this.ingressos.push(item);
        localStorage.setItem('ingresso', JSON.stringify(this.ingressos));
        localStorage.setItem('qtdCarrinho', JSON.stringify(this.qtdItemsCarrinho()));
        localStorage.setItem('totalCarrinho', JSON.stringify(this.totalCarrinho()));
        console.log(localStorage.totalCarrinho)
    }

    removeAllCart() {
        this.ingressos = [];
        localStorage.ingresso = JSON.stringify(this.ingressos)
        localStorage.setItem('totalCarrinho', JSON.stringify(0));
        localStorage.setItem('qtdCarrinho', JSON.stringify(0));
    }

    removeItemCart(index) {
        let ingressos = JSON.parse(localStorage.ingresso)
        for (let i = 0; i < ingressos.length; i++) {
            if (index == i) {
                ingressos.splice(i, 1)
                break;
            }
        }
        this.ingressos = ingressos;
        localStorage.ingresso = JSON.stringify(this.ingressos)
        //calcular cada item retirado
        localStorage.setItem('totalCarrinho', JSON.stringify(this.totalCarrinho()));
        //calcular quantidade de cada item retirado
        localStorage.setItem('qtdCarrinho', JSON.stringify(this.qtdItemsCarrinho()));
    }

    qtdItemsCarrinho() {
        return this.ingressos.length
    }


    totalCarrinho() {
        let total = 0;
        let ingressos = JSON.parse(localStorage.ingresso)
        for (let i = 0; i < ingressos.length; i++) {
            total += this.ingressos[i].total
        }
        return total;
    }


}