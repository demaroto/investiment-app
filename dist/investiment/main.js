(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aplicacao/aplicacao.component.css":
/*!***************************************************!*\
  !*** ./src/app/aplicacao/aplicacao.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aplicacao/aplicacao.component.html":
/*!****************************************************!*\
  !*** ./src/app/aplicacao/aplicacao.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-aplicacao></app-nav-aplicacao>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    \r\n    <section class=\"col s12 l6\">\r\n        <div class=\"col s12 l12\"> \r\n       <ul id=\"dropdown2\" class=\"dropdown-content\">\r\n      \r\n        <li *ngFor=\"let item of listPairName\" class=\"center-align\"><a href=\"javascript:void(0)\" [title]=\"item\" (click)=\"onGet(item)\">{{ item }}</a></li>\r\n        </ul>\r\n      <a class=\"btn dropdown-trigger\" href=\"javascript:void(0)\" data-target=\"dropdown2\" (click)=\"onListPair()\">Selecione a Criptomoeda<i class=\"material-icons right\">arrow_drop_down</i></a>\r\n      </div>      \r\n      <div class=\"input-field col s12 l12\">\r\n    \r\n          <input #inputBuy id=\"inputBuy\" value=\"\" type=\"number\" step=\"0.01\" min=\"0.01\" class=\"validate\" (keyup.enter)=\"onAddListWacthing({type: 'buy', pair: getData.pairWork, price: getData.bid, input: inputBuy.value})\">\r\n          <label for=\"inputBuy\">% Comprar</label>\r\n          <a class=\"waves-effect waves-light btn\" (click)=\"onAddListWacthing({type: 'buy', pair: getData.pairWork, price: getData.bid, input: inputBuy.value})\"><i class=\"material-icons left\">attach_money</i>Comprar</a>\r\n        </div>\r\n        \r\n        <div class=\"input-field col s12 l12\">\r\n          <input #inputSell id=\"inputSell\" value=\"\" type=\"number\" step=\"0.01\" min=\"0.01\" class=\"validate\" (keyup.enter)=\"onAddListWacthing({type: 'sell', pair: getData.pairWork, price: getData.bid, input: inputBuy.value})\">\r\n          <label for=\"inputSell\">% Vender</label>\r\n          <a class=\"waves-effect waves-light btn\" (click)=\"onAddListWacthing({type: 'sell', pair: getData.pairWork, price: getData.low, input: inputSell.value})\"><i class=\"material-icons left\">attach_money</i>Vender</a>\r\n        </div>\r\n      </section>\r\n    \r\n     <section class=\"col s12 l6\">\r\n       \r\n        <h3> {{ getData.pairWork }}</h3>\r\n  \r\n          <div class=\"collection\">\r\n            <a href=\"javascript:void(0);\" class=\"collection-item\"><span class=\"badge\">{{ getData.bid }}</span>Compra</a>\r\n            <a href=\"javascript:void(0);\" class=\"collection-item\"><span class=\"badge\">{{ getData.low }}</span>Venda</a>\r\n   \r\n          </div>\r\n      </section>\r\n       \r\n   \r\n   </div> \r\n    <div class=\"row\">\r\n      <h4>{{ listWatching.length > 0 ? \"Acompanhando: \"+listWatching.length : '' }}</h4>\r\n      <table class=\"table\" [style.visibility]=\"listWatching.length > 0 ? 'visible' :'hidden'\">\r\n        <thead>\r\n          <tr>\r\n              <th>Criptomoeda</th>\r\n              <th>Tipo</th>\r\n              <th>Preço Selecionado</th>\r\n              <th>Preço Desejado</th>\r\n              <th>Preço Atual</th>\r\n              <th>Ação</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n           <tr *ngFor=\"let cripto of listWatching\" [class.green.accent-3]=\"onSendMsg(cripto)\">\r\n            <td>{{ cripto.pair }}</td>\r\n            <td>{{ cripto.type }}</td>\r\n            <td>{{ cripto.price.toFixed(8) }}</td>\r\n            <td>{{ cripto.wish.toFixed(8) }}</td>\r\n            <td>{{ cripto.now }}</td>\r\n            <td><a href=\"javascript:void(0)\" class=\"red darken-1 btn\" (click)=\"onRemove(listWatching.indexOf(cripto))\"><i class=\"material-icons left\">delete_forever</i>Excluir</a></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n            \r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/aplicacao/aplicacao.component.ts":
/*!**************************************************!*\
  !*** ./src/app/aplicacao/aplicacao.component.ts ***!
  \**************************************************/
/*! exports provided: AplicacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AplicacaoComponent", function() { return AplicacaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _poloniex_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./poloniex.service */ "./src/app/aplicacao/poloniex.service.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Descrição: Definição do componente da aplicação
//Autor: Matheus 
//Entrada: Seletor HTML, Template HTML e Folha de estilo CSS
//Saída:
var AplicacaoComponent = /** @class */ (function () {
    //Descrição: Inicializa as variáveis e tipa as variaveis dos serviços
    //Autor: Matheus 
    //Entrada: Variáveis do API
    //Saída: Inicializa um temporizador para buscar os valores das moedas.
    function AplicacaoComponent(poloniexService, loginService, router) {
        var _this = this;
        this.poloniexService = poloniexService;
        this.loginService = loginService;
        this.router = router;
        this.pairSelected = 'BTC_ETH';
        this.getData = {};
        this.getAllPair = {};
        this.listPairName = [];
        this.listWatching = [];
        this.inputB = 0;
        this.logged = '';
        this.logged = this.loginService.getId();
        this.onLogged();
        this.onGet(this.pairSelected);
        this.onGetAll();
        setInterval(function () {
            _this.onGet(_this.pairSelected);
            _this.onGetAll();
            _this.onAtualizaPreco();
        }, 5000);
    }
    //Descrição: Uma função que verifica se o usuário se encontra logado ou não.
    //Autor: Matheus 
    //Entrada: Não tem
    //Saída: Se o usuario esta logado ou deslogado
    AplicacaoComponent.prototype.onLogged = function () {
        if (this.logged != '') {
            console.log('Logado');
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    //Descrição: Recupera o valor de uma moeda
    //Autor: Matheus
    //Entrada: Nome da moeda  
    //Saida: Pega o nome da moeda e mostra o valor da mesma
    AplicacaoComponent.prototype.onGet = function (pair) {
        var _this = this;
        this.pairSelected = pair;
        this.poloniexService.getResultado()
            .subscribe(function (data) { return _this.getData = {
            all: data,
            pairWork: pair,
            low: JSON.stringify(parseFloat(data[pair]['lowestAsk'])),
            bid: JSON.stringify(parseFloat(data[pair]['highestBid']))
        }; }, 
        //Caso haja erro
        function (error) { return console.log("Erro de conex\u00E3o, reconectando .."); }, 
        //Alterações completas
        function () { return ''; });
    };
    //Descrição: Recupera os valores de todas as criptomoedas
    //Autor: Matheus
    //Entrada: Não tem
    //Saída: Dados dos valores de todas as criptomoedas
    AplicacaoComponent.prototype.onGetAll = function () {
        var _this = this;
        this.poloniexService.getResultado()
            .subscribe(function (data) { return _this.getAllPair = {
            all: JSON.stringify(data)
        }; }, function (error) { return console.log('Erro de conexão, reconectando ..'); }, function () { return ''; });
    };
    //Descrição: Lista os nomes das criptomoedas
    //Autor: Matheus 
    //Entrada: Não tem
    //Saída: Adiciona a lista das criptomoedas
    AplicacaoComponent.prototype.onListPair = function () {
        var all = JSON.parse(this.getAllPair.all);
        for (var pair in all) {
            if (pair.split('_')[0] == 'BTC') {
                this.listPairName.push(pair);
            }
        }
    };
    //Descrição: Seleciona as moedas para analisar
    //Autor: Matheus 
    //Entrada: os dados da moeda
    //Saída: Adiciona para analise das moedas criptografadas
    AplicacaoComponent.prototype.onAddListWacthing = function (obj) {
        if (obj.input <= 0) {
            return;
        }
        var wish;
        var tipo;
        if (obj.type == 'buy') {
            tipo = 'Compra';
            wish = parseFloat(obj.price) - (parseFloat(obj.price) * parseFloat(obj.input)) / 100;
        }
        else {
            tipo = 'Venda';
            wish = parseFloat(obj.price) + (parseFloat(obj.price) * parseFloat(obj.input)) / 100;
        }
        var newObj = {
            'pair': obj.pair,
            'type': tipo,
            'price': parseFloat(obj.price),
            'wish': wish,
            'now': this.onAcompanhaPreco(obj.pair, tipo)
        };
        this.listWatching.push(newObj);
        this.inputB = 0;
    };
    //Descrição: Exclui as moedas criptografadas selecionadas da analise 
    //Autor: Matheus 
    //Entrada: A chave da lista que pertence as moedas
    //Saída: Excluir as moedas que foram selecionadas
    AplicacaoComponent.prototype.onRemove = function (index) {
        if (confirm("Deseja realmente excluir " + this.listWatching[index].pair + " | " + this.listWatching[index].type + ": " + this.listWatching[index].wish.toFixed(8) + " ?")) {
            this.listWatching.splice(index, 1);
        }
    };
    //Descrição: Recebe dois parametros,a moeda e o tipo da função, se for compra retorna um valor e se for venda, outro.
    //Autor: Matheus 
    //Entrada: O nome da moeda e o tipo da transação (compra ou venda)
    //Saída: Exibir valores
    AplicacaoComponent.prototype.onAcompanhaPreco = function (moeda, tipo) {
        var low = JSON.parse(this.getAllPair.all)[moeda]['lowestAsk'];
        var hig = JSON.parse(this.getAllPair.all)[moeda]['highestBid'];
        if (tipo == 'Compra') {
            return hig;
        }
        else {
            return low;
        }
    };
    //Descrição: Recebe as atualizações de valores em tempo real
    //Autor: Matheus 
    //Entrada: Não tem
    //Saída: Atualizar os valores das moedas
    AplicacaoComponent.prototype.onAtualizaPreco = function () {
        for (var i in this.listWatching) {
            this.listWatching[i].now = this.onAcompanhaPreco(this.listWatching[i].pair, this.listWatching[i].type);
        }
    };
    //Descrição: Avisa quando pode comprar ou vender colocando uma cor verde de fundo
    //Autor: Matheus 
    //Entrada: Objeto da moeda que se encontra na lista
    //Saída: Atualizar os valores das moedas
    AplicacaoComponent.prototype.onSendMsg = function (cripto) {
        if (cripto.type == 'Compra') {
            return cripto.now <= cripto.wish;
        }
        else {
            return cripto.now >= cripto.wish;
        }
    };
    AplicacaoComponent.prototype.ngOnInit = function () {
    };
    AplicacaoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aplicacao',
            template: __webpack_require__(/*! ./aplicacao.component.html */ "./src/app/aplicacao/aplicacao.component.html"),
            styles: [__webpack_require__(/*! ./aplicacao.component.css */ "./src/app/aplicacao/aplicacao.component.css")]
        }),
        __metadata("design:paramtypes", [_poloniex_service__WEBPACK_IMPORTED_MODULE_1__["PoloniexService"], _login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AplicacaoComponent);
    return AplicacaoComponent;
}());



/***/ }),

/***/ "./src/app/aplicacao/nav-aplicacao/nav-aplicacao.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/aplicacao/nav-aplicacao/nav-aplicacao.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  @import url(\"http://fonts.googleapis.com/icon?family=Material+Icons\"); \r\n  @import url(\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css\"); \r\n  @charset utf-8; \r\n  nav a.brand-logo{\r\n    font-size: 2.1em;\r\n  }"

/***/ }),

/***/ "./src/app/aplicacao/nav-aplicacao/nav-aplicacao.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/aplicacao/nav-aplicacao/nav-aplicacao.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <nav class=\"teal darken-4\">\r\n    <div class=\"nav-wrapper\">\r\n      <a href=\"javascript:void(0)\" class=\"brand-logo\" style=\"margin-left:20px;\">Investiment Overview</a>\r\n      <a href=\"javascript:void(0)\" data-target=\"mobile-demo\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a>\r\n      <ul class=\"right hide-on-med-and-down\">\r\n       \r\n        <li><a routerLink=\"\">Sair</a></li>\r\n        \r\n      </ul>\r\n    </div>\r\n  </nav>\r\n\r\n  <ul class=\"sidenav\" id=\"mobile-demo\">\r\n    \r\n    <li><a routerLink=\"\">Sair</a></li>\r\n    \r\n  </ul>\r\n  <!-- Slide -->\r\n   <ul id=\"slide-out\" class=\"sidenav\">\r\n    <li><div class=\"user-view\">\r\n      <div class=\"background\">\r\n        <img src=\"assets/Imagens/Home/investimento.jpg\">\r\n      </div>\r\n      <a href=\"#user\"><img class=\"circle\" src=\"assets/Imagens/Home/perfil.jpg\"></a>\r\n      <a href=\"#name\"><span class=\"white-text name\">John Doe</span></a>\r\n      <a href=\"#email\"><span class=\"white-text email\">jdandturk@gmail.com</span></a>\r\n    </div></li>\r\n    <li><a href=\"#!\"><i class=\"material-icons\">cloud</i>First Link With Icon</a></li>\r\n    <li><a href=\"#!\">Second Link</a></li>\r\n    <li><div class=\"divider\"></div></li>\r\n    <li><a class=\"subheader\">Subheader</a></li>\r\n    <li><a class=\"waves-effect\" href=\"#!\">Third Link With Waves</a></li>\r\n  </ul>\r\n  <a href=\"javascript:void(0)\" data-target=\"slide-out\" class=\"sidenav-trigger\" style=\"margin-left:20px;\"><i class=\"material-icons\" style=\"margin-top:15px;\">menu</i></a>\r\n\r\n  \r\n        "

/***/ }),

/***/ "./src/app/aplicacao/nav-aplicacao/nav-aplicacao.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/aplicacao/nav-aplicacao/nav-aplicacao.component.ts ***!
  \********************************************************************/
/*! exports provided: NavAplicacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavAplicacaoComponent", function() { return NavAplicacaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavAplicacaoComponent = /** @class */ (function () {
    function NavAplicacaoComponent() {
    }
    NavAplicacaoComponent.prototype.ngOnInit = function () {
    };
    NavAplicacaoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-aplicacao',
            template: __webpack_require__(/*! ./nav-aplicacao.component.html */ "./src/app/aplicacao/nav-aplicacao/nav-aplicacao.component.html"),
            styles: [__webpack_require__(/*! ./nav-aplicacao.component.css */ "./src/app/aplicacao/nav-aplicacao/nav-aplicacao.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavAplicacaoComponent);
    return NavAplicacaoComponent;
}());



/***/ }),

/***/ "./src/app/aplicacao/poloniex.service.ts":
/*!***********************************************!*\
  !*** ./src/app/aplicacao/poloniex.service.ts ***!
  \***********************************************/
/*! exports provided: PoloniexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoloniexService", function() { return PoloniexService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var POLONIEX_URL = 'https://poloniex.com/public?command=returnTicker';
var PoloniexService = /** @class */ (function () {
    //Descrição: Inicia o construtor e inicializa a variável http e define como HttpClient
    //Autor: Lucas Santos
    //Entrada: inicializa a variavel http tipando ela como um modulo HttpCliente que é um modulo de requisição ajax
    //Saida: Nenhum dado
    function PoloniexService(http) {
        this.http = http;
    }
    //Descrição: Retorna a requisição http do tipo get
    //Autor: Lucas Santos
    //Entrada: Nenhum dado
    //Saida: Retorna a requisição http do tipo get
    PoloniexService.prototype.getResultado = function () {
        //Descrição: Essa função retorna dados da URL passada como parametro
        //Autor: Lucas Santos
        //Entrada: Nenhum dado
        //Saida: Retorna um JSON da requisição Ajax 
        return this.http.get(POLONIEX_URL);
    };
    PoloniexService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PoloniexService);
    return PoloniexService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "./src/app/cadastro/cadastro.component.ts");
/* harmony import */ var _aplicacao_aplicacao_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aplicacao/aplicacao.component */ "./src/app/aplicacao/aplicacao.component.ts");
/* harmony import */ var _login_nav_login_cadastro_nav_login_cadastro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/nav-login-cadastro/nav-login-cadastro.component */ "./src/app/login/nav-login-cadastro/nav-login-cadastro.component.ts");
/* harmony import */ var _cadastro_cadastro_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cadastro/cadastro.service */ "./src/app/cadastro/cadastro.service.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _aplicacao_nav_aplicacao_nav_aplicacao_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./aplicacao/nav-aplicacao/nav-aplicacao.component */ "./src/app/aplicacao/nav-aplicacao/nav-aplicacao.component.ts");
/* harmony import */ var _aplicacao_poloniex_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./aplicacao/poloniex.service */ "./src/app/aplicacao/poloniex.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["CadastroComponent"],
                _aplicacao_aplicacao_component__WEBPACK_IMPORTED_MODULE_6__["AplicacaoComponent"],
                _login_nav_login_cadastro_nav_login_cadastro_component__WEBPACK_IMPORTED_MODULE_7__["NavLoginCadastroComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _aplicacao_nav_aplicacao_nav_aplicacao_component__WEBPACK_IMPORTED_MODULE_12__["NavAplicacaoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_11__["routing"]
            ],
            providers: [
                _cadastro_cadastro_service__WEBPACK_IMPORTED_MODULE_8__["CadastroService"],
                _login_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"],
                _aplicacao_poloniex_service__WEBPACK_IMPORTED_MODULE_13__["PoloniexService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _aplicacao_aplicacao_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aplicacao/aplicacao.component */ "./src/app/aplicacao/aplicacao.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




/****
* DESCRIÇÃO:Define as rotas
* AUTOR:Wildemar
* ENTRADA:Cria um array de objetos com as definições das rotas da aplicação
* SAIDA:Nenhuma
***/
var APP_ROUTES = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'app', component: _aplicacao_aplicacao_component__WEBPACK_IMPORTED_MODULE_2__["AplicacaoComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/cadastro/cadastro.component.css":
/*!*************************************************!*\
  !*** ./src/app/cadastro/cadastro.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cadastro/cadastro.component.html":
/*!**************************************************!*\
  !*** ./src/app/cadastro/cadastro.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  cadastro works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/cadastro/cadastro.component.ts":
/*!************************************************!*\
  !*** ./src/app/cadastro/cadastro.component.ts ***!
  \************************************************/
/*! exports provided: CadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroComponent", function() { return CadastroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/****
* DESCRIÇÃO:Definição do componente cadastro
* AUTOR: Wildemar Barbosa
* ENTRADA:Seletor HTML, Template HTML e Folha de estilo CSS
* SAIDA
***/
var CadastroComponent = /** @class */ (function () {
    function CadastroComponent() {
    }
    CadastroComponent.prototype.ngOnInit = function () {
    };
    CadastroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cadastro',
            template: __webpack_require__(/*! ./cadastro.component.html */ "./src/app/cadastro/cadastro.component.html"),
            styles: [__webpack_require__(/*! ./cadastro.component.css */ "./src/app/cadastro/cadastro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CadastroComponent);
    return CadastroComponent;
}());



/***/ }),

/***/ "./src/app/cadastro/cadastro.service.ts":
/*!**********************************************!*\
  !*** ./src/app/cadastro/cadastro.service.ts ***!
  \**********************************************/
/*! exports provided: CadastroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroService", function() { return CadastroService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CadastroService = /** @class */ (function () {
    function CadastroService() {
        this.cadastrados = [
            { 'email': 'wildemar.barbosa@outlook.com', 'senha': '123456', 'id': '1b98bd908dec95f8b2732e319ef5ef42' },
            { 'email': 'lucas.sevenfolds@gmail.com', 'senha': '123456', 'id': '8325f8b2d4877ac997e8fb20aabe5683' },
            { 'email': 'mastershout@hotmail.com', 'senha': '123456', 'id': '44bea3a54e9341e113fcd26b09a2e260' }
        ];
    }
    CadastroService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CadastroService);
    return CadastroService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700,900\");\r\n@charset \"utf-8\";\r\n@charset \"utf-8\";\r\n/* ---------------------------------------------- Body ---------------------------------------------- */\r\nbody{margin:0; padding:0; background-color: #FFF; overflow-x:hidden; font-family: 'Lato', sans-serif;}\r\nh1, h2, h3, h4, h5, h6{margin:0; padding: 0;}\r\n::-webkit-scrollbar-track{background-color:#000000;}\r\n::-webkit-scrollbar{width:0px;}\r\n::-webkit-scrollbar-thumb{background:#646464;}\r\n* {box-sizing: border-box;}\r\n* :focus{outline: 0;}\r\n@media only screen and (min-width:1024px){\r\n\t\r\n#Responsive{display:none !important;}\r\n\t\r\n/* ---------------------------------------------- Global ---------------------------------------------- */\r\n\r\n.content{height:100%; width: 1000px; position:absolute; left: 50%; margin-left: -500px;}\r\n\t\r\n/* ---------------------------------------------- Header ---------------------------------------------- */\r\n\r\nheader{height:130px; width: 100%; position:fixed; z-index: 9999;}\r\n\r\nheader .logo{position: absolute; height: 60px; width: 286px; margin: 20px 80px; cursor: pointer; background-image: url('logo.png'); background-size: cover;}\r\n\r\nheader .logo2{position: absolute; height: 60px; width: 286px; margin: 20px 80px; cursor: pointer; background-image: url('logo2.png'); background-size: cover; display: none;}\r\n\r\nnav{width: 600px; position:absolute; left:100%; margin-left:-630px; margin-top: 45px;}\r\n\r\nnav ul{margin:0; padding: 0; display: flex; text-align: center;}\r\n\r\nnav li{list-style: none;}\r\n\r\nnav a{font-family: 'Montserrat', sans-serif; font-size: 16px; padding: 16px 35px; color:#FFF; cursor:pointer; transition:.5s; text-decoration: none; transition:.3s; font-weight: bold; text-transform: uppercase; border-bottom:2px solid transparent;}\r\n\r\nnav a:hover{border-bottom: 2px solid #00b4ff;}\r\n\r\n.actived{border-bottom: 2px solid #00b4ff;}\r\n\r\n/* ---------------------------------------------- Home ---------------------------------------------- */\r\n\r\n.home{height: 100vh; width:100%; position:relative; background-image: url('home.jpg'); background-size: cover; color: #FFF; background-position: center; background-repeat: no-repeat;}\r\n\r\n.home h1{font-weight: bolder; font-size: 24px;}\r\n\r\n.home h2{font-weight: bolder; font-size: 20px; text-transform: uppercase;}\r\n\r\n.home h3{font-weight: lighter; font-size: 16px; line-height: 30px; text-transform: uppercase;}\r\n\r\n.home h4{font-weight: lighter; font-size: 18px; line-height: 30px;}\r\n\r\n.home-mask{height: 100%; width: 100%; background-color: hsla(0,0%,0%,0.60); position: absolute;}\r\n\r\n.home-txt-1{position: absolute; width: 680px; top: 45%; margin-left: 80px;}\r\n\r\n.home-txt-2{position: absolute; width: 380px; top: 45%; left: 100%; margin-left: -470px; border:1px solid #00588a; padding: 50px; margin-top: -50px;}\r\n\r\n.home input[type=button]{height: 40px; width: 150px; border-radius: 4px ; color: #FFF; border:none; background-color:#00b4ff; cursor: pointer; font-size: 15px; text-transform: uppercase; font-weight: bold; border:1px solid transparent; transition: .2s;}\r\n\r\n.home input[type=button]:hover{background-color: hsla(0,0%,0%,0.00); border:1px solid #00b4ff;}\r\n\r\n/* ---------------------------------------------- Analise ---------------------------------------------- */\r\n\r\n.analise{height: 820px; width: 100%; background-image: url('analise.jpg'); background-size: cover; background-position: center; position: relative; color: #FFF; text-align: center; background-repeat: no-repeat; padding-top: 110px;}\r\n\r\n.analise-mask{height: 100%; width: 100%; background-color: hsla(0,0%,0%,0.80); position:absolute; text-align: left; padding: 160px 40px; transition: .3s;}\r\n\r\n.analise-mask:hover{background-color: hsla(0,0%,0%,0.40);}\r\n\r\n.analise-title h1{font-size: 22px; text-transform: uppercase; padding-bottom: 40px;}\r\n\r\n.analise-title h2{font-size: 25px; text-transform: uppercase; padding-bottom: 80px;}\r\n\r\n.block-comprar{height: 450px; width: 30%; position: relative; background-image: url('comprar.jpg'); background-position: right; background-size: cover; float: left; margin-left: 18%; margin-right: 4%; cursor: pointer; background-repeat: no-repeat;}\r\n\r\n.block-vender{height: 450px; width: 30%; position: relative; background-image: url('vender.jpg'); background-position: center; background-size: cover; float: left; cursor: pointer; background-repeat: no-repeat;}\r\n\r\n.block-analise h1{font-size: 35px; font-weight: bold; text-transform: uppercase; padding-bottom: 20px;}\r\n\r\n.block-analise h3{font-size: 1.17em; font-weight: lighter; line-height: 25px;}\r\n\r\n.analise-line-1{height: 5px; width: 60px; background-color:#00b4ff; position: absolute; left: 50%; margin-left: -240px; margin-top: 10px;}\r\n\r\n.analise-line-2{height: 5px; width: 60px; background-color:#00b4ff; position: absolute; left: 50%; margin-left: 180px; margin-top: -57px;}\r\n\r\n/* ---------------------------------------------- Custo ---------------------------------------------- */\r\n\r\n.custo{height: 550px; width: 100%; background-image: url('custo.png'); background-size: cover; background-repeat: no-repeat; padding: 100px 100px;}\r\n\r\n.custo h1{text-transform: uppercase; font-size: 40px;}\r\n\r\n.custo h3{font-weight: normal; font-size: 20px; line-height: 30px;}\r\n\r\n.custo-line{height: 5px; width: 300px; background-color:#00b4ff; position: relative; margin-top: 30px; margin-bottom: 60px;}\r\n\r\n.custo strong{font-weight: bolder;}\r\n\r\n.custo input[type=button]{height: 60px; width: 300px; background-color: #00b4ff; border:none; border:1px solid transparent; color: #FFF; font-size: 20px; text-transform: uppercase; margin-top: 50px; cursor: pointer; transition: .2s;}\r\n\r\n.custo input[type=button]:hover{background-color: hsla(0,0%,0%,0.00); border:1px solid #00b4ff; color: #00b4ff;}\r\n\r\n.laptop{width: 500px; position: absolute; left: 100%; margin-left: -550px; margin-top: 10px;}\r\n\r\n.iphone{width: 100px; position: absolute; left: 100%; margin-left: -530px; margin-top: 140px;}\r\n\r\n/* ---------------------------------------------- Equipe ---------------------------------------------- */\r\n\r\n.equipe{height: 660px; width: 100%; background-color: #FFF; position: absolute; text-align: center; padding-top: 70px;}\r\n\r\n.equipe h1{font-size: 40px; text-transform: uppercase;}\r\n\r\n.equipe h2{font-size: 20px; font-weight: normal; padding-bottom: 70px;}\r\n\r\n.equipe h3{font-size: 20px; font-weight: bold; color: #00b4ff; padding-bottom: 5px;}\r\n\r\n.equipe h4{font-size: 18px; font-weight: normal; color:#646464;}\r\n\r\n.equipe-line{height: 5px; width: 200px; background-color:#00b4ff; position: relative; margin-top: 30px; margin-bottom: 60px; left: 50%; margin-left: -100px;}\r\n\r\n.block-equipe{height: 300px; width: 25%; float: left; margin-left: 5%}\r\n\r\n.equipe-img{height: 200px; width: 70%; border:1px solid #00b4ff; margin-bottom: 20px; margin-left: 15%;}\r\n\r\n.block-ajust{margin-left: 7.5% !important;}\r\n\r\n}\r\n/* ---------------------------------------------- Body ---------------------------------------------- */\r\nbody{margin:0; padding:0; background-color: #FFF; overflow-x:hidden; font-family: 'Lato', sans-serif;}\r\nh1, h2, h3, h4, h5, h6{margin:0; padding: 0;}\r\n::-webkit-scrollbar-track{background-color:#000000;}\r\n::-webkit-scrollbar{width:0px;}\r\n::-webkit-scrollbar-thumb{background:#646464;}\r\n* {box-sizing: border-box;}\r\n* :focus{outline: 0;}\r\n@media only screen and (min-width:1024px){\r\n\t\r\n#Responsive{display:none !important;}\r\n\t\r\n/* ---------------------------------------------- Global ---------------------------------------------- */\r\n\r\n.content{height:100%; width: 1000px; position:absolute; left: 50%; margin-left: -500px;}\r\n\t\r\n/* ---------------------------------------------- Header ---------------------------------------------- */\r\n\r\nheader{height:130px; width: 100%; position:fixed; z-index: 9999;}\r\n\r\nheader .logo{position: absolute; height: 60px; width: 286px; margin: 20px 80px; cursor: pointer; background-image: url('/assets/Imagens/Home/logo.png'); background-size: cover;}\r\n\r\nheader .logo2{position: absolute; height: 60px; width: 286px; margin: 20px 80px; cursor: pointer; background-image: url('/assets/Imagens/Home/logo2.png'); background-size: cover; display: none;}\r\n\r\nnav{width: 600px; position:absolute; left:100%; margin-left:-630px; margin-top: 0px; background-color: hsla(0,0%,0%,0.00); box-shadow:none;}\r\n\r\nnav ul{margin:0; padding: 0; display: flex; text-align: center;}\r\n\r\nnav li{list-style: none;}\r\n\r\nnav a{font-family: 'Montserrat', sans-serif; font-size: 16px; padding: 16px 35px; color:#FFF; cursor:pointer; transition:.5s; text-decoration: none; transition:.3s; font-weight: bold; text-transform: uppercase; border-bottom:2px solid transparent;}\r\n\r\nnav a:hover{border-bottom: 2px solid #00b4ff;}\r\n\r\n.active{border-bottom: 2px solid #00b4ff;}\r\n\r\n/* ---------------------------------------------- Home ---------------------------------------------- */\r\n\r\n.home{height: 100vh; width:100%; position:relative; background-image: url('/assets/Imagens/Home/home.jpg'); background-size: cover; color: #FFF; background-position: center; background-repeat: no-repeat;}\r\n\r\n.home h1{font-weight: bolder; font-size: 24px;}\r\n\r\n.home h2{font-weight: bolder; font-size: 20px; text-transform: uppercase;}\r\n\r\n.home h3{font-weight: lighter; font-size: 16px; line-height: 30px; text-transform: uppercase;}\r\n\r\n.home h4{font-weight: lighter; font-size: 18px; line-height: 30px;}\r\n\r\n.home-mask{height: 100%; width: 100%; background-color: hsla(0,0%,0%,0.60); position: absolute;}\r\n\r\n.home-txt-1{position: absolute; width: 680px; top: 45%; margin-left: 80px;}\r\n\r\n.home-txt-2{position: absolute; width: 380px; top: 45%; left: 100%; margin-left: -470px; border:1px solid #00588a; padding: 50px; margin-top: -50px;}\r\n\r\n.home input[type=button]{height: 40px; width: 150px; border-radius: 4px ; color: #FFF; border:none; background-color:#00b4ff; cursor: pointer; font-size: 15px; text-transform: uppercase; font-weight: bold; border:1px solid transparent; transition: .2s;}\r\n\r\n.home input[type=button]:hover{background-color: hsla(0,0%,0%,0.00); border:1px solid #00b4ff;}\r\n\r\n/* ---------------------------------------------- Analise ---------------------------------------------- */\r\n\r\n.analise{height: 820px; width: 100%; background-image: url('/assets/Imagens/Home/analise.jpg'); background-size: cover; background-position: center; position: relative; color: #FFF; text-align: center; background-repeat: no-repeat; padding-top: 110px;}\r\n\r\n.analise-mask{height: 100%; width: 100%; background-color: hsla(0,0%,0%,0.80); position:absolute; text-align: left; padding: 160px 40px; transition: .3s;}\r\n\r\n.analise-mask:hover{background-color: hsla(0,0%,0%,0.40);}\r\n\r\n.analise-title h1{font-size: 22px; text-transform: uppercase; padding-bottom: 40px;}\r\n\r\n.analise-title h2{font-size: 25px; text-transform: uppercase; padding-bottom: 80px;}\r\n\r\n.block-comprar{height: 450px; width: 30%; position: relative; background-image: url('/assets/Imagens/Home/comprar.jpg'); background-position: right; background-size: cover; float: left; margin-left: 18%; margin-right: 4%; cursor: pointer; background-repeat: no-repeat;}\r\n\r\n.block-vender{height: 450px; width: 30%; position: relative; background-image: url('/assets/Imagens/Home/vender.jpg'); background-position: center; background-size: cover; float: left; cursor: pointer; background-repeat: no-repeat;}\r\n\r\n.block-analise h1{font-size: 35px; font-weight: bold; text-transform: uppercase; padding-bottom: 20px;}\r\n\r\n.block-analise h3{font-size: 16x; font-weight: lighter; line-height: 25px;}\r\n\r\n.analise-line-1{height: 5px; width: 60px; background-color:#00b4ff; position: absolute; left: 50%; margin-left: -240px; margin-top: 10px;}\r\n\r\n.analise-line-2{height: 5px; width: 60px; background-color:#00b4ff; position: absolute; left: 50%; margin-left: 180px; margin-top: -57px;}\r\n\r\n/* ---------------------------------------------- Custo ---------------------------------------------- */\r\n\r\n.custo{height: 550px; width: 100%; background-image: url('/assets/Imagens/Home/custo.png'); background-size: cover; background-repeat: no-repeat; padding: 100px 100px;}\r\n\r\n.custo h1{text-transform: uppercase; font-size: 40px;}\r\n\r\n.custo h3{font-weight: normal; font-size: 20px; line-height: 30px;}\r\n\r\n.custo-line{height: 5px; width: 300px; background-color:#00b4ff; position: relative; margin-top: 30px; margin-bottom: 60px;}\r\n\r\n.custo strong{font-weight: bolder;}\r\n\r\n.custo input[type=button]{height: 60px; width: 300px; background-color: #00b4ff; border:none; border:1px solid transparent; color: #FFF; font-size: 20px; text-transform: uppercase; margin-top: 50px; cursor: pointer; transition: .2s;}\r\n\r\n.custo input[type=button]:hover{background-color: hsla(0,0%,0%,0.00); border:1px solid #00b4ff; color: #00b4ff;}\r\n\r\n.laptop{width: 500px; position: absolute; left: 100%; margin-left: -550px; margin-top: 10px;}\r\n\r\n.iphone{width: 100px; position: absolute; left: 100%; margin-left: -530px; margin-top: 140px;}\r\n\r\n/* ---------------------------------------------- Equipe ---------------------------------------------- */\r\n\r\n.equipe{height: 660px; width: 100%; background-color: #FFF; position: absolute; text-align: center; padding-top: 70px;}\r\n\r\n.equipe h1{font-size: 40px; text-transform: uppercase;}\r\n\r\n.equipe h2{font-size: 20px; font-weight: normal; padding-bottom: 70px;}\r\n\r\n.equipe h3{font-size: 20px; font-weight: bold; color: #00b4ff; padding-bottom: 5px;}\r\n\r\n.equipe h4{font-size: 18px; font-weight: normal; color:#646464;}\r\n\r\n.equipe-line{height: 5px; width: 200px; background-color:#00b4ff; position: relative; margin-top: 30px; margin-bottom: 60px; left: 50%; margin-left: -100px;}\r\n\r\n.block-equipe{height: 300px; width: 25%; float: left; margin-left: 5%}\r\n\r\n.equipe-img{height: 200px; width: 70%; border:1px solid #00b4ff; margin-bottom: 20px; margin-left: 15%;}\r\n\r\n.block-ajust{margin-left: 7.5% !important;}\r\n\r\n.lucas-img{background-image: url('/assets/Imagens/Home/lucas.jpg'); background-size: cover; background-position:center;}\r\n\r\n.matheus-img{background-image: url('/assets/Imagens/Home/matheus.jpg'); background-size: cover; background-position:center top;}\r\n\r\n.will-img{background-image: url('/assets/Imagens/Home/will.jpg'); background-size: cover; background-position:center top;}\r\n\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--------------------------------------------------- Header --------------------------------------------------->\r\n\r\n<header>\r\n\t\r\n\t<div class=\"logo inic\"></div>\r\n\t<div class=\"logo2 inic\"></div>\r\n\r\n\t<nav>\r\n\t\t<ul>\r\n\t\t\t<li><a href=\"#analise\">analise de investimentos</a></li>\r\n\t\t\t<li><a href=\"#custo\">custos operacionais</a></li>\r\n\t\t</ul>\r\n\t</nav>\r\n\t\r\n</header>\r\n<!-------------------------------------------------- Home -------------------------------------------------->\r\n<section class=\"home\">\r\n\r\n\t<div class=\"home-mask\">\r\n\r\n\t\t<div class=\"home-txt-1\">\r\n\t\t\t<h1>QUE TAL TURBINAR SEUS INVESTIMENTOS?</h1><br>\r\n\t\t\t<h3>NA Investment Overview VOCÊ ALÉM DE INVESTIR, CONTARÁ COM O AUXÍLIO DO NOSSO SISTEMA, NO QUAL TE AVISA A HORA CERTA DE COMPRAR E VENDER SUAS AÇÕES.</h3><br>\r\n\t\t\t<h3>TA ESPERANDO O QUE PRA INVESTIR?</h3>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"home-txt-2\">\r\n\t\t\t<h2>Segurança e Agilidade</h2><br>\r\n\t\t\t<h4>Entre agora na nossa plataforma e comece a investir!</h4><br>\r\n\t\t\t<input type=\"button\" value=\"Entrar\" id=\"btn-entrar\" routerLink=\"login\">\r\n\t\t</div>\r\n\t\r\n\t</div>\t\t\r\n\r\n</section>\r\n\r\n<!-------------------------------------------------- Analise -------------------------------------------------->\r\n\r\n<section class=\"analise\" id=\"analise\">\r\n\t\r\n\t<article class=\"analise-title\">\r\n\t\r\n\t\t<div class=\"analise-line-1\"></div>\r\n\t\t\t<h1>Analise de Investimento</h1>\r\n\t\t<div class=\"analise-line-2\"></div>\r\n\r\n\t\t<h2>Investindo com a gente, você investe em si mesmo</h2>\r\n\r\n\t</article>\r\n\t\r\n\t<article class=\"block-comprar block-analise\" routerLink=\"login\">\t\t\r\n\t\t<div class=\"analise-mask\">\r\n\t\t\t<h1>Comprar</h1>\t\t\r\n\t\t\t<h3>Agora ficou ainda mais fácil pra você saber a melhor hora pra fazer a compra de suas ações.</h3>\t\r\n\t\t</div>\r\n\t</article>\r\n\t\r\n\t<article class=\"block-vender block-analise\" routerLink=\"login\">\r\n\t\t<div class=\"analise-mask\">\r\n\t\t\t<h1>Vender</h1>\r\n\t\t\t<h3>O seu lucro acaba sendo ainda maior quando se sabe a hora certa para vender os suas ações.</h3>\r\n\t\t</div>\r\n\t</article>\r\n\r\n</section>\r\n\r\n<!-------------------------------------------------- Custo -------------------------------------------------->\r\n\r\n<section class=\"custo\" id=\"custo\">\r\n\r\n\t<img src=\"assets/Imagens/Home/laptop.png\" class=\"laptop\">\r\n\t<img src=\"assets/Imagens/Home/iphone.png\" class=\"iphone\">\r\n\r\n\t<h1>Custo da nossa plataforma</h1>\r\n\t<div class=\"custo-line\"></div>\r\n\t\r\n\t<h3>Nosso produto é <strong>100% gratuito</strong></h3>\r\n\t<h3>Esta esperando o que para clicar no link abaixo?</h3>\r\n\t<h3>Comece já a investir e vender suas ações na melhor hora!</h3>\r\n\t\r\n\t<input type=\"button\" value=\"Quero investir\" id=\"btn-quero-investir\" routerLink=\"login\">\r\n\t\r\n</section>\r\n\r\n<!-------------------------------------------------- Equipe -------------------------------------------------->\r\n\r\n<section class=\"equipe\">\r\n\r\n\t<h1>Nossa Equipe</h1>\r\n\t<div class=\"equipe-line\"></div>\r\n\t\r\n\t<h2>Nossa equipe é composta por um equipe competente capaz de atuar com profissioalismo no nosso sistema</h2>\r\n\r\n\t<div class=\"block-equipe block-ajust\">\r\n\t\t<div class=\"equipe-img will-img\"></div>\r\n\t\t<h3>Desenvolvedor</h3>\r\n\t\t<h4>Wildemar</h4>\r\n\t</div>\r\n\t<div class=\"block-equipe\">\r\n\t\t<div class=\"equipe-img lucas-img\"></div>\r\n\t\t<h3>Desenvolvedor</h3>\r\n\t\t<h4>Lucas Santos</h4>\r\n\t</div>\r\n\t<div class=\"block-equipe\">\r\n\t\t<div class=\"equipe-img matheus-img\"></div>\r\n\t\t<h3>Designer</h3>\r\n\t\t<h4>Matheus Ueda</h4>\r\n\t</div>\r\n\r\n</section>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/****
* DESCRIÇÃO:Definição do componente HOME
* AUTOR: Wildemar Barbosa
* ENTRADA:Seletor HTML, Template HTML e Folha de estilo CSS
* SAIDA:Nenhuma
***/
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-login-cadastro></app-nav-login-cadastro>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <form class=\"col s12\"  (keyup.enter)=\"validaAcesso(inputEmail.value, inputSenha.value)\">\r\n            <h2 class=\"teal-text text-lighten-1 center-align\">Login</h2>\r\n      \r\n        <ul [class]=\"classe\">\r\n            <li class=\"collection-item red lighten-3\">\r\n                <span class=\"btn-floating pulse red darken-1\"><i class=\"material-icons\">cancel</i></span>\r\n                <span class=\"red-text text-darken-4\">Dados inválidos .. =(</span>\r\n            </li>\r\n        </ul>\r\n            <div class=\"row\">\r\n                <div class=\"input-field col s12\">\r\n                    <input id=\"email\" type=\"email\" class=\"validate\" #inputEmail>\r\n                    <label for=\"email\">Email</label>\r\n                  </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"input-field col s12\">\r\n                    <input id=\"senha\" type=\"password\" class=\"validate\" #inputSenha>\r\n                    <label for=\"senha\">Senha</label>\r\n                  </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"row\">\r\n            <button class=\"btn waves-effect waves-light col s12\" (click)=\"validaAcesso(inputEmail.value, inputSenha.value)\">Entrar\r\n                    <i class=\"material-icons right\">send</i>\r\n                  </button>\r\n                  \r\n    </div>\r\n    \r\n</div>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js\"></script>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/****
* DESCRIÇÃO:Definição do decorator do componente login
* AUTOR: Wildemar Barbosa
* ENTRADA:Seletor HTML, Template HTML e Folha de estilo CSS
* SAIDA: Nenhuma
***/
var LoginComponent = /** @class */ (function () {
    /****
  * DESCRIÇÃO: Atribui a variável cadastrados o valor recuperado do serviço getCadastrados
  * AUTOR:Wildemar
  * ENTRADA:um parametro de serviço do login e outro de modulo de rota
  * SAIDA: Nenhuma saida
  ***/
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.cadastrados = [];
        this.classe = "hide";
        this.cadastrados = this.loginService.getCadastrados();
    }
    //Descrição: Verifica se usuário existe e os dados estiver corretos.
    //Autor: Matheus
    //Entrada: Recebe as informações do email e da senha
    //Saida: Retorna a validade se o usuario é existente ou dados estão corretos
    LoginComponent.prototype.validaAcesso = function (email, senha) {
        if (this.loginService.existeUsuario(email, senha)) {
            this.router.navigate(['/app']);
        }
        else {
            this.classe = "show collection";
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cadastro_cadastro_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cadastro/cadastro.service */ "./src/app/cadastro/cadastro.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    /*
    DESCRIÇÃO: Inicializa o serviço de cadastro dos usuários
    AUTOR: Wildemar
    ENTRADA: Instancia do arquivo de serviço
    SAIDA: Atribuição da variável ao serviço
    */
    function LoginService(cadastroService) {
        this.cadastroService = cadastroService;
        this.logado = "";
    }
    LoginService.prototype.getCadastrados = function () {
        return this.cadastroService.cadastrados;
    };
    /*
    Descrição: Verificar se o usuario existe, validando o email e senha
    Autor: Lucas Santos
    Entrada: Os dados de email e senha passados como parametro
    Saida: Se o email e senha for igual aos dados cadastrados, returna verdadeiro
    */
    LoginService.prototype.existeUsuario = function (email, senha) {
        for (var _i = 0, _a = this.cadastroService.cadastrados; _i < _a.length; _i++) {
            var dados = _a[_i];
            if (email == dados.email && senha == dados.senha) {
                this.logado = dados.id;
                return true;
            }
        }
        return false;
    };
    /*
    Descrição: Esta função returna o usuario logado
    Autor: Lucas Santos
    Entrada: Nenhum dado
    Saida: Retorna usuario logado
    */
    LoginService.prototype.getId = function () {
        return this.logado;
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_cadastro_cadastro_service__WEBPACK_IMPORTED_MODULE_1__["CadastroService"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/nav-login-cadastro/nav-login-cadastro.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/login/nav-login-cadastro/nav-login-cadastro.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  @import url(\"http://fonts.googleapis.com/icon?family=Material+Icons\"); \r\n  @import url(\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css\"); \r\n  @charset utf-8;"

/***/ }),

/***/ "./src/app/login/nav-login-cadastro/nav-login-cadastro.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/login/nav-login-cadastro/nav-login-cadastro.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"teal darken-4\">\r\n<div class=\"nav-wrapper\">\r\n      <a href=\"javascript:void(0)\" class=\"brand-logo\" style=\"margin-left:20px;\">Investiment Overview</a>\r\n      <a href=\"javascript:void(0)\" data-target=\"mobile-demo\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a>\r\n      <ul class=\"right hide-on-med-and-down\">\r\n          <li><a routerLink=\"\">Home</a></li>\r\n         \r\n      </ul>\r\n    </div>\r\n  </nav>\r\n\r\n  <ul class=\"sidenav\" id=\"mobile-demo\">\r\n         <li><a routerLink=\"\">Home</a></li>\r\n      \r\n  </ul>\r\n\r\n\r\n\r\n          \r\n    "

/***/ }),

/***/ "./src/app/login/nav-login-cadastro/nav-login-cadastro.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/login/nav-login-cadastro/nav-login-cadastro.component.ts ***!
  \**************************************************************************/
/*! exports provided: NavLoginCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLoginCadastroComponent", function() { return NavLoginCadastroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavLoginCadastroComponent = /** @class */ (function () {
    function NavLoginCadastroComponent() {
    }
    NavLoginCadastroComponent.prototype.ngOnInit = function () {
    };
    NavLoginCadastroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-login-cadastro',
            template: __webpack_require__(/*! ./nav-login-cadastro.component.html */ "./src/app/login/nav-login-cadastro/nav-login-cadastro.component.html"),
            styles: [__webpack_require__(/*! ./nav-login-cadastro.component.css */ "./src/app/login/nav-login-cadastro/nav-login-cadastro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavLoginCadastroComponent);
    return NavLoginCadastroComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\www-e\nodejs\angular-node\investiment-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map