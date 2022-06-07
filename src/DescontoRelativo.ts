import CalculaDescontoStrategyInterface from "./CalculaDescontoStrategyInterface";
import Pedido from "./Pedido";

class DescontoRelativo implements CalculaDescontoStrategyInterface {

    getValorDesconto(pedido: Pedido) {
        if (pedido.getTotal() >= 1000){
            return 10;
        } else if (pedido.getTotal() >= 500 && pedido.getTotal() < 1000 ) {
            return 5;
        } else {
            return 2;
        }
    }
}

export default DescontoRelativo;

// R$10,00 -> major equal than R$1000,00
// R$ 5,00 -> minor than R$1000,00 and major equal than 500,00 
// R$ 2,00 -> minor than R$ 500,00.