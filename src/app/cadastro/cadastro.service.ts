import { Injectable } from '@angular/core';

@Injectable()
export class CadastroService {
  cadastrados:any = [
    {'email': 'wildemar.barbosa@outlook.com', 'senha': '123456', 'id': '1b98bd908dec95f8b2732e319ef5ef42'},
    {'email': 'lucas.sevenfolds@gmail.com', 'senha': '123456', 'id': '8325f8b2d4877ac997e8fb20aabe5683'},
    {'email': 'mastershout@hotmail.com', 'senha': '123456','id': '44bea3a54e9341e113fcd26b09a2e260'}
  ];
  
  

  constructor() { }


}
