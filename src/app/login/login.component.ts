import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  cadastrados:string[] = [];
  classe:string = "hide";
  
  /****
* DESCRIÇÃO: Atribui a variável cadastrados o valor recuperado do serviço getCadastrados 
* AUTOR:Wildemar
* ENTRADA:um parametro de serviço do login e outro de modulo de rota
* SAIDA: Nenhuma saida
***/
  
  constructor(private loginService:LoginService, private router: Router) {
    
    
   this.cadastrados = this.loginService.getCadastrados();
  

   }

 //Descrição: Verifica se usuário existe e os dados estiver corretos.
 //Autor: Matheus
 //Entrada: Recebe as informações do email e da senha
 //Saida: Retorna a validade se o usuario é existente ou dados estão corretos
   validaAcesso(email, senha){

    if(this.loginService.existeUsuario(email,senha)){
      this.router.navigate(['/app']);
      console.log(this.loginService.getId());
    }else{
      this.classe = "show collection";
    }
    
   }
   
   
  
  ngOnInit() {
  }

}
