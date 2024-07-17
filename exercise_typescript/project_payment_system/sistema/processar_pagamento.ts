import { MetodoPagamento } from "../entidade/metodo_pagamento";

export class ProcessarPagamento {

  constructor( private pagarCom: MetodoPagamento) {}

  processando(quantia: number): void {
    this.pagarCom.pagar(quantia);
  }
}
