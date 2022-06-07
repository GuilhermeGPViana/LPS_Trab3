import CalculaDescontoStrategyInterface from "./CalculaDescontoStrategyInterface";
import Pedido from "./Pedido";

class CalculadoraDeDesconto {
    private calculadorDeDesconto: CalculaDescontoStrategyInterface;

    constructor(calculadorDeDesconto: CalculaDescontoStrategyInterface) {
        this.calculadorDeDesconto = calculadorDeDesconto;
    }

    calculaDesconto(pedido: Pedido) {
        return this.calculadorDeDesconto.getValorDesconto(pedido);
    }
}

export default CalculadoraDeDesconto;