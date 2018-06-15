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
