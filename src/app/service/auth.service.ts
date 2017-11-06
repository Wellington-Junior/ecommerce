import { LoginModel } from './../models/login.model';
import { INGRESSOS_OAPI } from '../app.api';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  
  public usuario = {
    nome:"",
    tipo:"",
    token:""
  }

  public logado = false

  constructor(
    public router:Router,
    public http:Http,
    public loginModel:LoginModel
  ){}

  guard_login(login){
   this.usuario.nome = login.nome;
   this.usuario.token = login.token;
   this.usuario.tipo = login.tipo;
   localStorage.setItem('usuario',JSON.stringify(this.usuario));
   this.logado = true;
 
  }

  getToken(){
    this.loginModel = JSON.parse(localStorage.getItem('usuario'))
    return this.loginModel.token;
  }

  login(login){
    this.http.post(`${INGRESSOS_OAPI}/login`,login)
      .subscribe((value)=>{
        this.loginModel.nome = value.json().usuario
        this.loginModel.token = value.json().token
        this.loginModel.tipo = value.json().tipo
        this.guard_login(this.loginModel)
        this.router.navigate(["/"]);
    })
  }

  signup(email:string,senha:string){

  }

  logout(){
    localStorage.removeItem('usuario')
    this.usuario.nome = ""
    this.usuario.token = ""
    this.usuario.tipo = ""
    this.logado = false       
  }

  carrega_sessao(){
    let sessao = localStorage.getItem('usuario')
    if(sessao){
      this.usuario = JSON.parse(sessao)
      this.logado = true
    }
  }

}