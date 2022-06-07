
import Pedido from "../../src/Pedido";
import DescontoRelativo from "../../src/DescontoRelativo";
import CalculadoraDeDesconto from "../../src/CalculadoraDeDesconto";

describe('Calculate', function() {
  it('Desconto Relativo', function() {
    let pedido = new Pedido(1200);
    let valor_correto = 0;

    if (pedido.getTotal() >= 1000){
      valor_correto = 10;
    } else if (pedido.getTotal() >= 500 && pedido.getTotal() < 1000 ) {
        valor_correto = 5;
    } else {
        valor_correto = 2;
    }
   
    let calculadora = new CalculadoraDeDesconto(new DescontoRelativo()).calculaDesconto(pedido);

    expect(calculadora).toBe(valor_correto);
  }); 
});