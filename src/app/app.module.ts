import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AplicacaoComponent } from './aplicacao/aplicacao.component';
import { NavLoginCadastroComponent } from './login/nav-login-cadastro/nav-login-cadastro.component';
import { CadastroService } from './cadastro/cadastro.service';
import { LoginService } from './login/login.service';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { NavAplicacaoComponent } from './aplicacao/nav-aplicacao/nav-aplicacao.component';
import { PoloniexService } from './aplicacao/poloniex.service';



@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    AplicacaoComponent,
    NavLoginCadastroComponent,
    HomeComponent,
    NavAplicacaoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [
    CadastroService,
    LoginService,
    PoloniexService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
