import { PagamentoBoleto } from "./formas/pagamento_boleto";
import { PagamentoCartao } from "./formas/pagamento_cartao";
import { ProcessarPagamento } from "./sistema/processar_pagamento";


const clienteCartao = new PagamentoCartao();
const processandoCartao = new ProcessarPagamento(clienteCartao);
processandoCartao.processando(300);

const clienteBoleto = new PagamentoBoleto();
const processandoBoleto = new ProcessarPagamento(clienteBoleto);
processandoBoleto.processando(200);
