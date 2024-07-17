import { MetodoPagamento } from "../entidade/metodo_pagamento";

export class PagamentoCartao implements MetodoPagamento{
  pagar(quantia: number): void{
    console.log(`Processando pagamento com cartão de crédito de ${quantia}...`)
  }
}
