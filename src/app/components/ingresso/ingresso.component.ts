import { IngressoModel } from './../../models/ingresso.model';
import { IngressoService } from './../../service/ingresso.service';
import { EventoModel } from './../../models/evento.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
//import domtoimage from 'dom-to-image';


@Component({
  selector: 'app-ingresso',
  templateUrl: './ingresso.component.html',
  styleUrls: ['./ingresso.component.css']
})
export class IngressoComponent implements OnInit {

  idvenda:number = 0;
  ingressos = {
    artista:'',
    data:'',
    idingresso:'',
    local:'',
    tipo:'',
    valor:'',
    idtipoingresso:''
  }
  ingressosModel:IngressoModel[] = [];

  constructor(
    public actroute:ActivatedRoute,
    public ingService: IngressoService
    //public compras:
  ) { }

  ngOnInit() {
  
   this.ingressos = JSON.parse(localStorage.getItem('venda'))
   for(let key in this.ingressos){
      this.ingressosModel.push(this.ingressos[key])
   }
   
   
  }

  gerarPDF(){
 
    window.print();
    window.Blob.bind
    
  } 

}
