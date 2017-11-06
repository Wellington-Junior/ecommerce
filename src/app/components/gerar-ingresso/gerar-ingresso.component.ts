import { 
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
  Input
 } from '@angular/core';
import * as qRious from 'qrious'; 
//import * as jsPDF from  'jspdf';

@Component({
  selector: 'app-gerar-ingresso',
  templateUrl: './gerar-ingresso.component.html',
  styleUrls: ['./gerar-ingresso.component.css']
})
export class GerarIngressoComponent implements OnInit {

  @ViewChild('canvas') canvasRef:ElementRef
  @Output() click = new EventEmitter()

  @Input() artista:any = ''
  @Input() cidade:any = ''
  @Input() local:any = ''
  @Input() data:string = ''
  @Input() tipoingresso:any = ''
  @Input() valoringresso:any = ''
  @Input() idingresso:string = ''


  constructor() { }

  ngOnInit() {
    this.gerarIngresso();
  }

  gerarIngresso(){
    let contexto: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');
    
    //contexto.fillStyle="#F3E2A9";
    contexto.fillStyle="white";
    contexto.fillRect(0,30,793,290);

    contexto.fillStyle = "#000000";
    contexto.textAlign = "center";
    contexto.font = "15px Arial";
    contexto.fillText("-----------------------------------------------------------------------"
    +"----------------------------------------------------------------------------------------",this.canvasRef.nativeElement.width/2, 32);
    
    contexto.font = "bold 18px Arial";
    contexto.fillText("KING INGRESSOS", 130, 60);

    contexto.font = "bold 20px Arial";
    contexto.fillText(""+this.artista , 100, 120);

    contexto.font = "bold 14px Arial";
    contexto.fillText("INGRESSO:"+this.tipoingresso,80, 160);
    
    contexto.fillStyle="#e6e6e6";
    contexto.fillRect(17,164,400,20);

    contexto.font = "14px Arial";
    contexto.fillStyle="#000000";
    contexto.fillText("LOCAL: "+this.local+" | BELÉM-PA",130, 181);

    contexto.font = "bold 14px Arial";
    contexto.fillText("DATA: "+this.data,120, 205);
    
    contexto.fillStyle="#e6e6e6";
    contexto.fillRect(17,210,400,20);

    contexto.font = "14px Arial";
    contexto.fillStyle="#000000";
    contexto.fillText("HORARIO: 21:00h",90, 227);


    contexto.font = "bold 18px Arial";
    contexto.fillText("VALOR ",545, 145);
    contexto.font = "bold 18px Arial";
    contexto.fillText(this.valoringresso,545, 165);

    contexto.font = "bold 10px Arial";
    //contexto.fillText("IMPRESSO "+this.getData(),545, 210);

    contexto.font = "bold 9px Arial";
    contexto.fillText("OBRIGATORIO APRESENTAÇÃO DE DOCUMENTO", 200, 295);
    contexto.fillText("OFICIAL COM FOTO. PROIBIDO A ENTRADA DE MENORES", 200, 305);

    


    contexto.font = "15px Arial";
    contexto.fillText("-----------------------------------------------------------------------"+
    "-----------------------------------------------------------------------------------------"
    +"------------------------------------------------------------------------------------------",0, 80);


    //====================BORDAS VERTICAIS=========================//
    
    contexto.font = "15px Arial";
    contexto.moveTo(0,27);
    contexto.lineTo(0,320);
    contexto.stroke();

    contexto.font = "15px Arial";
    contexto.moveTo(625,27);
    contexto.lineTo(625,320);
    contexto.stroke();

    contexto.font = "15px Arial";
    contexto.moveTo(792,27);
    contexto.lineTo(792,320);
    contexto.stroke();
    
    //====================FIM-BORDAS VERTICAIS=========================//

    //===========ATISTA====================
    contexto.font = "bold 13px Arial";
    contexto.fillText("ARTISTA",655, 100);
    
    contexto.fillStyle="#e6e6e6";
    contexto.fillRect(626,104,165,20);

    contexto.font = "13px Arial";
    contexto.fillStyle="#000000";
    contexto.fillText(this.artista ,675, 120);
    //===========FIM-ARTISTA===============


    //===========INGRESSO====================
    contexto.font = "bold 13px Arial";
    contexto.fillText("INGRESSO",663, 140);
    
    contexto.fillStyle="#e6e6e6";
    contexto.fillRect(626,142,165,20);

    contexto.font = "13px Arial";
    contexto.fillStyle="#000000";
    contexto.fillText(this.tipoingresso,639, 158);
    //===========FIM-INGRESSO===============

    //===========VALOR====================
    contexto.font = "bold 13px Arial";
    contexto.fillText("VALOR",650, 175);
    
    contexto.fillStyle="#e6e6e6";
    contexto.fillRect(626,177,165,20);

    contexto.font = "13px Arial";
    contexto.fillStyle="#000000";
    contexto.fillText(this.valoringresso,658, 192);
    //===========FIM-VALOR===============

    contexto.font = "bold 10px Arial";
    //contexto.fillText("IMPRESSO "+this.getData(),705, 220);

    //====================IMAGEMS DO INGRESSO======================
    //var image = new Image();
    //image.onload = function(){
    //    contexto.drawImage(image,635,35,30,30);
    //}
    //image.src = "../../../assets/img/logo.svg";


    var image1 = new Image();
    image1.onload = function(){
        contexto.drawImage(image1,675,240,70,70);
    }
    image1.src = this.gerarQR(); 
    //"../../../assets/img/qr.png";

    var image2 = new Image();
    image2.onload = function(){
        contexto.drawImage(image2,500,220,90,90);
    }
    image2.src = this.gerarQR(); 
    
    //"../../../assets/img/qr.png";

    //var image3 = new Image();
    //image3.onload = function(){
    //    contexto.drawImage(image3,10,35,30,30);
    //}
    //image3.src = "../../../assets/img/logo.svg";
    //===================================FIM-IMAGEM INGRESSO=========================================

    contexto.font = "15px Arial";
    contexto.fillText("------------------------------------------------------------------------"
    +"-----------------------------------------------------------------------------------------",this.canvasRef.nativeElement.width/2, 325);
    
    //var myImage = this.canvasRef.nativeElement.toDataURL("image/png,1.0");

        //Geração de PDF com Ingresso
    //return myImage;
		
  }

  gerarQR(){

    var qr = new qRious();
    qr.background = 'white';
    qr.backgroundAlpha = 0.8;
    qr.foreground = 'black';
    qr.foregroundAlpha = 1.0;
    qr.level = 'H';
    qr.padding = 25;
    qr.size = 500;
    qr.value = this.idingresso;
    return qr.toDataURL();
  }

  ingressoPDF(){

  }
}
