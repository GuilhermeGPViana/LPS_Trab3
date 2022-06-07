"use strict";
exports.__esModule = true;
var DescontoPercentual = /** @class */ (function () {
    function DescontoPercentual() {
    }
    DescontoPercentual.prototype.getValorDesconto = function (pedido) {
        return (Number(pedido.getTotal()) * 0.15);
    };
    return DescontoPercentual;
}());
exports["default"] = DescontoPercentual;
