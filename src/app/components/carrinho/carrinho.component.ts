import { CarrinhoService } from './../../service/carrinho.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
})
export class CarrinhoComponent implements OnInit {

  ingressos = [];
  total = 0;
  qtdCarrinho = 0;

  constructor(
    public router: Router,
    public carrinho:CarrinhoService
  ) { }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('ingresso')) == null) {
      this.ingressos = []
    }
    else {
      this.ingressos = JSON.parse(localStorage.getItem('ingresso'))
    }

    this.totalCarrinho();
    this.qtdCarrinho = JSON.parse(localStorage.getItem('qtdCarrinho'))
  }

  finalizarCompra() {
    let usuaio = JSON.parse(localStorage.getItem('usuario'))
    if (usuaio) {
      this.router.navigate(['/venda'])
    }
    else {
      this.router.navigate(['/login'])
    }
  }

  totalCarrinho() {

    if (JSON.parse(localStorage.getItem('totalCarrinho')) == null ||
      JSON.parse(localStorage.getItem('totalCarrinho')) == 0) {
        this.total = 0
    }
    else {
        this.total = JSON.parse(localStorage.getItem('totalCarrinho'))
    }
  }

  limparCarrinho() {
    //remover da tabela
    this.ingressos = [];
    //limpar sub-total
    this.total = 0
    //remover do localStorage
    this.carrinho.removeAllCart();

    this.qtdCarrinho = JSON.parse(localStorage.getItem('qtdCarrinho'))
  }

  removerItemTab(item,index) {
    //retira o ingresso selecionado
    this.ingressos.splice(index, 1);
    //remove do local storage
    this.carrinho.removeItemCart(index);
    this.total = this.carrinho.totalCarrinho();
    this.qtdCarrinho = JSON.parse(localStorage.getItem('qtdCarrinho'))
  }


}
