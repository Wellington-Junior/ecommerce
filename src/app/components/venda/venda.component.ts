import { Router } from '@angular/router';
import { VendaModel } from './../../models/venda.model';
import { VendaService } from './../../service/venda.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css'],
  providers:[VendaService,VendaModel] 
})
export class VendaComponent implements OnInit {

   items={
    idtipoingresso:0,
    artista:'',
    imagem:'',
    nome:'',
    qtd:0,
    valor:0
  }

  obj_venda = {
      tipos:[],
	    retirada:'impressao'
  }

  constructor(public vendaService:VendaService,
  public router:Router,
  public venda:VendaModel) { }

  ngOnInit() {
   this.items = JSON.parse(localStorage.getItem('ingresso'))
   console.log(this.items)
  }


  pagamento(){
    //localStorage.removeItem('ingresso')
    this.items  = JSON.parse(localStorage.getItem('ingresso')) 
    console.log(this.items)
    
    for(let key in this.items){
      this.obj_venda.tipos.push({
        idtipoingresso:this.items[key].idtipoingresso,
        qtd:this.items[key].qtd
      })  
    }

    console.log(this.obj_venda.tipos)

    this.vendaService.salvarVenda(
      {
        compra: JSON.stringify(
         this.obj_venda
        )
      }
    )
    this.router.navigate(['/ingressos'])
  }

}
