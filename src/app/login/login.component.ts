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
  constructor(private loginService:LoginService, private router: Router) {
    
    
   this.cadastrados = this.loginService.getCadastrados();
  

   }

   validaAcesso(email, senha){
     /*
     Verifica se usuário existe e os dados estiver corretos.
     */
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
