import { LoginModel } from './../../models/login.model';
import { AuthService } from './../../service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  usuario: any;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
    this.usuario = new LoginModel;
  }

  ngOnInit() {
    this.authService.logout()
  }

  login(usuario: LoginModel) {
    this.authService.login(usuario)
    console.log('teste')
  }

}
