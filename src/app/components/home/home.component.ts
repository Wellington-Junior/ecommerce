import { EventoService } from './../../service/evento.service';
import { EventoModel } from './../../models/evento.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  eventos: EventoModel[]= [];
  
    carrinhoqtd: string = '0';
    
    constructor(private eventoService:EventoService){
      this.carrinhoqtd = localStorage.getItem('carrinho')
    }
  
     ngOnInit() {
        this.eventoService.getEventosListar()
          .map(response=>response.json().data)
          .subscribe((eventos)=>{
            eventos.forEach(dados => {
              this.eventos.push(dados)
            })
          })
      }

}
