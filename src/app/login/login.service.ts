import { Injectable } from '@angular/core';
import { CadastroService } from '../cadastro/cadastro.service';

@Injectable()
export class LoginService {

  /*
  DESCRIÇÃO: Inicializa o serviço de cadastro dos usuários
  AUTOR: Wildemar
  ENTRADA: Instancia do arquivo de serviço
  SAIDA: Atribuição da variável ao serviço  
  */
  constructor(private cadastroService: CadastroService) { }

    logado:string="";
    
  getCadastrados(){
   return this.cadastroService.cadastrados;
  }
  
  /*
  Descrição: Verificar se o usuario existe, validando o email e senha
  Autor: Lucas Santos
  Entrada: Os dados de email e senha passados como parametro
  Saida: Se o email e senha for igual aos dados cadastrados, returna verdadeiro 
  */
  existeUsuario(email,senha){
    for (const dados of this.cadastroService.cadastrados) {
       if(email == dados.email && senha == dados.senha){
           this.logado = dados.id;
         return true;
       }
    }
    return false;
  }
  
  getId(){
      return this.logado;
  }
  
  
  

}
