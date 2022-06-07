"use strict";
exports.__esModule = true;
var CalculadoraDeDesconto_1 = require("./CalculadoraDeDesconto");
var Pedido_1 = require("./Pedido");
var SemDesconto_1 = require("./SemDesconto");
var DescontoRelativo_1 = require("./DescontoRelativo");
var DescontoPercentual_1 = require("./DescontoPercentual");
{
    var pedido = new Pedido_1["default"](10);
    var calculadora = new CalculadoraDeDesconto_1["default"](new SemDesconto_1["default"]());
    var response = "\nStrategyPattern\nValor de Desconto: R$".concat(calculadora.calculaDesconto(pedido), "\n");
    console.log(response);
}
{
    var pedido = new Pedido_1["default"](1000);
    var calculadora = new CalculadoraDeDesconto_1["default"](new DescontoRelativo_1["default"]());
    var response = "\nStrategyPattern\nValor de Desconto: R$".concat(calculadora.calculaDesconto(pedido), "\n");
    console.log(response);
}
{
    var pedido = new Pedido_1["default"](750);
    var calculadora = new CalculadoraDeDesconto_1["default"](new DescontoRelativo_1["default"]());
    var response = "\nStrategyPattern\nValor de Desconto: R$".concat(calculadora.calculaDesconto(pedido), "\n");
    console.log(response);
}
{
    var pedido = new Pedido_1["default"](250);
    var calculadora = new CalculadoraDeDesconto_1["default"](new DescontoRelativo_1["default"]());
    var response = "\nStrategyPattern\nValor de Desconto: R$".concat(calculadora.calculaDesconto(pedido), "\n");
    console.log(response);
}
{
    var pedido = new Pedido_1["default"](100);
    var calculadora = new CalculadoraDeDesconto_1["default"](new DescontoPercentual_1["default"]());
    var response = "\nStrategyPattern\nValor de Desconto: R$".concat(calculadora.calculaDesconto(pedido), "\n");
    console.log(response);
}
