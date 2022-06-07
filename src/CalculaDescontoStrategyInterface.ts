import Pedido from "./Pedido";

interface CalculaDescontoStrategyInterface {
    getValorDesconto: (pedido: Pedido) => Number;
}

export default CalculaDescontoStrategyInterface;