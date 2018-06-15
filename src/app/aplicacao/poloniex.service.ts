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
 
 
 // Retorna a requisição http do tipo get.
 // Essa função retorna dados da URL passada como parametro
  getResultado() {
    
   return this.http.get(POLONIEX_URL);
  
    
  }
  
  
  
  
}  

