"use strict";
exports.__esModule = true;
var DescontoRelativo = /** @class */ (function () {
    function DescontoRelativo() {
    }
    DescontoRelativo.prototype.getValorDesconto = function (pedido) {
        if (pedido.getTotal() >= 1000) {
            return 10;
        }
        else if (pedido.getTotal() >= 500 && pedido.getTotal() < 1000) {
            return 5;
        }
        else {
            return 2;
        }
    };
    return DescontoRelativo;
}());
exports["default"] = DescontoRelativo;
// R$10,00 -> major equal than R$1000,00
// R$ 5,00 -> minor than R$1000,00 and major equal than 500,00 
// R$ 2,00 -> minor than R$ 500,00.
