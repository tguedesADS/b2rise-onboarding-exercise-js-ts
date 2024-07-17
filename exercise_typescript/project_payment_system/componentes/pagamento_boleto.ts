import { MetodoPagamento } from "../entidade/metodo_pagamento";

export class PagamentoBoleto implements MetodoPagamento{
  pagar(quantia: number): void {
    console.log(`Processando pagamento de boleto de ${quantia}...`)
  }
}
