import { Component, OnInit } from '@angular/core';
import { PoloniexService } from './poloniex.service';
import { LoginService } from '../login/login.service';


@Component({
  selector: 'app-aplicacao',
  templateUrl: './aplicacao.component.html',
  styleUrls: ['./aplicacao.component.css']
})
export class AplicacaoComponent implements OnInit {

  pairSelected:string='BTC_ETH';
  getData:any = {};
  getAllPair:any = {}; 
  listPairName:any = [];
  listWatching:any = [];
  inputB:number = 0;
  logged:string = '';
 
  constructor(private poloniexService: PoloniexService, private loginService: LoginService) {
      this.logged = this.loginService.getId();
      this.onLogged();
     this.onGet(this.pairSelected);
     this.onGetAll();
      setInterval(() => { 
        this.onGet(this.pairSelected); 
        this.onGetAll();
       this.onAtualizaPreco();
      }, 5000);

  }
  
  onLogged(){
    if(this.logged != ''){
      console.log('Logado');
    }else{
      console.log('Deslogado');
    }
  }
  
  onGet(pair:string){
    this.pairSelected = pair;
    this.poloniexService.getResultado()
    .subscribe(
      //Atribui os dados da requisição para as variáveis
      data => this.getData = {
        all: data,
        pairWork: pair,
        low: JSON.stringify(parseFloat(data[pair]['lowestAsk'])), 
        bid: JSON.stringify(parseFloat(data[pair]['highestBid']))
      },
      //Caso haja erro
      error => console.log(`Erro de conexão, reconectando ..`),
      //Alterações completas
      () => ''
      );
    
  }
  
  //Descrição: Recupera os valores de todas as criptomoedas
  //Autor: Matheus
  //Entrada: Não tem
  //Saída: Dados dos valores de todas as criptomoedas
  onGetAll(){
    this.poloniexService.getResultado()
    .subscribe(
      data => this.getAllPair = {
        all: JSON.stringify(data)
      },
      error => console.log('Erro de conexão, reconectando ..'),
      () => ''
      );
    
  }
  
  //Descrição: Lista os nomes das criptomoedas
  //Autor: Matheus 
  //Entrada: Não tem
  //Saída: Adiciona a lista das criptomoedas
  onListPair(){
    
    let all = JSON.parse(this.getAllPair.all);
    for(let pair in all){

      if(pair.split('_')[0] == 'BTC'){
        this.listPairName.push(pair);
      }
    }
  }

  //Descrição: Seleciona as moedas para analisar
  //Autor: Matheus 
  //Entrada: os dados da moeda
  //Saída: Adiciona para analise das moedas criptografadas
  onAddListWacthing(obj:any){
    if(obj.input <= 0){
      
      return;
    }
    let wish:number;
    let tipo:string;
    if(obj.type == 'buy'){
      tipo = 'Compra';
      wish = parseFloat(obj.price)-(parseFloat(obj.price)*parseFloat(obj.input))/100;
    }else{
      tipo = 'Venda';
      wish = parseFloat(obj.price)+(parseFloat(obj.price)*parseFloat(obj.input))/100
    }
    
    var newObj = {
       
        'pair': obj.pair,
        'type': tipo,
        'price': parseFloat(obj.price),
        'wish': wish,
        'now': this.onAcompanhaPreco(obj.pair,tipo)
          
          
        
        
    };
   this.listWatching.push(newObj);
   this.inputB = 0; 
  }
  
  //Descrição: Exclui as moedas criptografadas selecionadas da analise 
  //Autor: Matheus 
  //Entrada: A chave da lista que pertence as moedas
  //Saída: Excluir as moedas que foram selecionadas
  onRemove(index){
    if(confirm(`Deseja realmente excluir ${this.listWatching[index].pair} | ${this.listWatching[index].type}: ${this.listWatching[index].wish.toFixed(8)} ?`)){
       this.listWatching.splice(index, 1);
    }
   
  }
  
  //Descrição: Recebe dois parametros,a moeda e o tipo da função, se for compra retorna um valor e se for venda, outro.
  //Autor: Matheus 
  //Entrada: O nome da moeda e o tipo da transação (compra ou venda)
  //Saída: Exibir valores
  onAcompanhaPreco(moeda:string,tipo:any){
    let low = JSON.parse(this.getAllPair.all)[moeda]['lowestAsk'];
    let hig = JSON.parse(this.getAllPair.all)[moeda]['highestBid'];
    if(tipo == 'Compra'){
      return hig;
    }else{
      return low;
    }
   
  }
 
  //Descrição: Recebe as atualizações de valores em tempo real
  //Autor: Matheus 
  //Entrada: Não tem
  //Saída: Atualizar os valores das moedas
  onAtualizaPreco(){
    for(let i in this.listWatching){
      this.listWatching[i].now = this.onAcompanhaPreco(this.listWatching[i].pair, this.listWatching[i].type);

    }
  }
 
  //Descrição: Avisa quando pode comprar ou vender colocando uma cor verde de fundo
  //Autor: Matheus 
  //Entrada: Objeto da moeda que se encontra na lista
  //Saída: Atualizar os valores das moedas
  onSendMsg(cripto){
      
    if(cripto.type == 'Compra'){
      return cripto.now <= cripto.wish;
    }else{
      return cripto.now >= cripto.wish;
    }
    
  }
  

  ngOnInit() {
  
  }

}
