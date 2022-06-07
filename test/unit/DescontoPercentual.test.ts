
import Pedido from "../../src/Pedido";
import DescontoPercentual from "../../src/DescontoPercentual";
import CalculadoraDeDesconto from "../../src/CalculadoraDeDesconto";

describe('Calculate', function() {
  it('Desconto Percentual', function() {
    let pedido = new Pedido(100);
    let percentual_correto = (Number(pedido.getTotal()) * 0.15); 
    let calculadora = new CalculadoraDeDesconto(new DescontoPercentual()).calculaDesconto(pedido);

    expect(calculadora).toBe(percentual_correto);
  }); 
});