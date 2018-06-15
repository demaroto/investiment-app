import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { AplicacaoComponent } from './aplicacao/aplicacao.component';
import { HomeComponent } from './home/home.component';


/****
* DESCRIÇÃO:Define as rotas
* AUTOR:Wildemar
* ENTRADA:Cria um array de objetos com as definições das rotas da aplicação
* SAIDA:Nenhuma
***/
const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'app', component: AplicacaoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
