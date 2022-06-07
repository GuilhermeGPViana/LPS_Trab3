import CalculaDescontoStrategyInterface from "./CalculaDescontoStrategyInterface";
import Pedido from "./Pedido";

class DescontoPercentual implements CalculaDescontoStrategyInterface {

    getValorDesconto(pedido: Pedido) {
        return (Number(pedido.getTotal()) * 0.15);
    }
}

export default DescontoPercentual;