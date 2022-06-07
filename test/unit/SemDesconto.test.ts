
import Pedido from "../../src/Pedido";
import SemDesconto from "../../src/SemDesconto";
import CalculadoraDeDesconto from "../../src/CalculadoraDeDesconto";

describe('Calculate', function() {
  it('Semd Desconto', function() {
    let pedido = new Pedido(100);
    let calculadora = new CalculadoraDeDesconto(new SemDesconto()).calculaDesconto(pedido);

    expect(calculadora).toBe(0);
  }); 
});