import CalculadoraDeDesconto from "./CalculadoraDeDesconto";
import Pedido from "./Pedido";
import SemDesconto from "./SemDesconto";
import DescontoRelativo from "./DescontoRelativo";
import DescontoPercentual from "./DescontoPercentual";

{
  let pedido = new Pedido(10);
  let calculadora = new CalculadoraDeDesconto(new SemDesconto());
  let response = `\nStrategyPattern\nValor de Desconto: R$${calculadora.calculaDesconto(pedido)}\n`;
  console.log(response);
}

{
  let pedido = new Pedido(1000);
  let calculadora = new CalculadoraDeDesconto(new DescontoRelativo());
  let response = `\nStrategyPattern\nValor de Desconto: R$${calculadora.calculaDesconto(pedido)}\n`;
  console.log(response);
}

{
  let pedido = new Pedido(750);
  let calculadora = new CalculadoraDeDesconto(new DescontoRelativo());
  let response = `\nStrategyPattern\nValor de Desconto: R$${calculadora.calculaDesconto(pedido)}\n`;
  console.log(response);
}

{
  let pedido = new Pedido(250);
  let calculadora = new CalculadoraDeDesconto(new DescontoRelativo());
  let response = `\nStrategyPattern\nValor de Desconto: R$${calculadora.calculaDesconto(pedido)}\n`;
  console.log(response);
}

{
  let pedido = new Pedido(100);
  let calculadora = new CalculadoraDeDesconto(new DescontoPercentual());
  let response = `\nStrategyPattern\nValor de Desconto: R$${calculadora.calculaDesconto(pedido)}\n`;
  console.log(response);
    
}
