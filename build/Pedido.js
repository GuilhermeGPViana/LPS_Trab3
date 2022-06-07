"use strict";
exports.__esModule = true;
var Pedido = /** @class */ (function () {
    function Pedido(total) {
        this.total = total;
    }
    Pedido.prototype.getTotal = function () {
        return this.total;
    };
    return Pedido;
}());
exports["default"] = Pedido;
