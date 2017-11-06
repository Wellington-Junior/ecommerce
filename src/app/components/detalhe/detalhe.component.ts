import { CarrinhoService } from './../../service/carrinho.service';
import { EventoService } from './../../service/evento.service';
import { EventoModel } from './../../models/evento.model';
import { Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/operator/map';
import 'rxjs'
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',

})
export class DetalheComponent implements OnInit {

  imagemUrl:string;
  carrinhoqtd:string;
  tipos=[]

  public latitude: number;
  public longitude: number;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    public actroute: ActivatedRoute,
    public eventoService:EventoService,
    public evento:EventoModel,
    public carrinho:CarrinhoService,
    public mapsAPILoader: MapsAPILoader,
    public ngZone: NgZone
  ){
    this.carrinhoqtd = localStorage.getItem('carrinho')
  }

  ngOnInit() {
    this.actroute.params.subscribe(
        (params: any) => {
          this.evento.idevento = params['id'];
          this.eventoService.getEvento(this.evento)
            .subscribe((evento)=>{
               this.evento = evento.json().data
               for (var key in this.evento) {
                  this.evento = this.evento[key]
                  this.imagemUrl = this.evento.imagem
               }
            })
          this.eventoService.getAllTipoIngressos(this.evento)
            .subscribe((tipos)=>{
              console.log(tipos)
              this.tipos = tipos;
          })
            
          }
      );

  
  }

  getValue(idtipoingresso,imagem,artista,tipo,qtd,valor,total){

      this.carrinho.addIngressoCart({
        idtipoingresso:idtipoingresso,
        imagem:imagem,
        artista:artista,
        nome:tipo,
        qtd:qtd,
        valor:valor,
        total:total
      })
    
  }


}
