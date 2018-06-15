import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

const POLONIEX_URL = 'https://poloniex.com/public?command=returnTicker';


@Injectable()


export class PoloniexService {

  //Descrição: Inicia o construtor e inicializa a variável http e define como HttpClient
  //Autor: Lucas Santos
  //Entrada: inicializa a variavel http tipando ela como um modulo HttpCliente que é um modulo de requisição ajax
  //Saida: Nenhum dado
  constructor(private http: HttpClient) {
     
  }
 
 
 //Descrição: Retorna a requisição http do tipo get
 //Autor: Lucas Santos
 //Entrada: Nenhum dado
 //Saida: Retorna a requisição http do tipo get
  getResultado() {
    
   //Descrição: Essa função retorna dados da URL passada como parametro
   //Autor: Lucas Santos
   //Entrada: Nenhum dado
   //Saida: Retorna um JSON da requisição Ajax 
   return this.http.get(POLONIEX_URL);
  
    
  }
  
  
  
  
}  

