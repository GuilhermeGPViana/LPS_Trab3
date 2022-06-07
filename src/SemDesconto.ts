import CalculaDescontoStrategyInterface from "./CalculaDescontoStrategyInterface";
import Pedido from "./Pedido";

class SemDesconto implements CalculaDescontoStrategyInterface {
    
    getValorDesconto(pedido: Pedido) {
        return 0;
    }
}

export default SemDesconto;