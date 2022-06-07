"use strict";
exports.__esModule = true;
var CalculadoraDeDesconto = /** @class */ (function () {
    function CalculadoraDeDesconto(calculadorDeDesconto) {
        this.calculadorDeDesconto = calculadorDeDesconto;
    }
    CalculadoraDeDesconto.prototype.calculaDesconto = function (pedido) {
        return this.calculadorDeDesconto.getValorDesconto(pedido);
    };
    return CalculadoraDeDesconto;
}());
exports["default"] = CalculadoraDeDesconto;
