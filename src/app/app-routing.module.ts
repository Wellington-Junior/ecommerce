import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { IngressoComponent } from './components/ingresso/ingresso.component';
import { VendaComponent } from './components/venda/venda.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { DetalheComponent } from './components/detalhe/detalhe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContainerComponent } from './components/container/container.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {
    path:'',component:ContainerComponent,
        children:[
            {path:'',pathMatch:'full',redirectTo:'home'},
            {path:'home',component:HomeComponent},
            {path:'detalhe/:id',component:DetalheComponent},
            {path:'carrinho',component:CarrinhoComponent},
            {path:'venda',component:VendaComponent, canActivate: [AuthGuard]},
            {path:'login',component:LoginComponent }
        ]
  },
  {path:'ingressos',component:IngressoComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }