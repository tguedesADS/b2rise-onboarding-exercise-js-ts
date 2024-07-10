// 1. Escreva uma instrução `switch` que registre uma mensagem com base no valor de uma variável (por exemplo, "vermelho", "azul", "verde").
const cor = "vermelho";

switch (cor) {
  case "amarelo":
    console.log("O sinal de trânsito está amarelo, você deve ter atenção e diminuir a velocidade!");
    break;
  case "verde":
    console.log("O sinal de trânsito está verde, você pode passar!");
    break;
  case "vermelho":
    console.log("O sinal de trânsito está vermelho, você deve parar!");
    break;
  default:
    console.log("Cor desconhecida!");
}

// 2. Use uma instrução `switch` para registrar o número de dias em um mês, dado o nome do mês.

let mes = "julho";

switch (mes) {
  case "janeiro":
  case "março":
  case "maio":
  case "julho":
  case "agosto":
  case "outubro":
  case "dezembro":
    console.log("Este mês tem 31 dias.");
    break;
  case "fevereiro":
    console.log("Este mês tem 28 ou 29 dias (dependendo do ano).");
    break;
  case "abril":
  case "junho":
  case "setembro":
  case "novembro":
    console.log("Este mês tem 30 dias.");
    break;
  default:
    console.log("Mês desconhecido!");
}

// 3. Escreva uma instrução `switch` que verifique um número e registre se é 1, 2 ou 3.

let numero = 2;

switch (numero) {
  case 1:
    console.log("O número é 1.");
    break;
  case 2:
    console.log("O número é 2.");
    break;
  case 3:
    console.log("O número é 3.");
    break;
  default:
    console.log("O número não é 1, 2 ou 3.");
}

// 4. Use uma instrução `switch` para registrar uma mensagem com base no dia da semana.
let diaDaSemana = "quarta-feira";

switch (diaDaSemana) {
  case "segunda-feira":
    console.log("Hoje é um dia de trabalho!");
    break;
  case "terça-feira":
    console.log("Você está no meio da semana!");
    break;
  case "quarta-feira":
    console.log("Você está quase no fim da semana!");
    break;
  case "quinta-feira":
    console.log("Quase lá! Amanhã é sexta-feira!");
    break;
  case "sexta-feira":
    console.log("Finalmente! É sexta-feira!");
    break;
  case "sábado":
    console.log("É fim de semana! Dia de ir para o curso!");
    break;
  case "domingo":
    console.log("Descanse! É o último dia do fim de semana. Prepare-se para a semana que vem!");
    break;
  default:
    console.log("Dia da semana desconhecido!");
}

// 5. Escreva uma instrução `switch` com um caso `default` que registre uma mensagem para um valor desconhecido.
let color = "marrom";

switch (color) {
  case "vermelho":
    console.log("A cor é vermelho.");
    break;
  case "azul":
    console.log("A cor é azul.");
    break;
  case "verde":
    console.log("A cor é verde.");
    break;
  default:
    console.log("A cor não é conhecida.");
}

// 6. Use uma instrução `switch` para executar funções diferentes com base em um valor de string.

let user = "vermelho";

switch (user) {
  case "vermelho":
    mostrarImagem("imagem_vermelha.jpg");
    break;
  case "azul":
    mostrarImagem("imagem_azul.jpg");
    break;
  case "verde":
    mostrarImagem("imagem_verde.jpg");
    break;
  default:
    console.log("A cor não é conhecida.");
}

function mostrarImagem(url) {
  console.log(`Mostrando imagem: ${url}`);
}

// 7. Escreva uma instrução `switch` que verifique o valor de uma variável e registre mensagens diferentes para diferentes intervalos (por exemplo, 0-10, 11-20).

let score = 14;

switch (true) {
  case score >= 0 && score <= 10:
    console.log("Nota baixa");
    break;
  case score >= 11 && score <= 20:
    console.log("Nota média");
    break;
  case score >= 21 && score <= 30:
    console.log("Nota alta");
    break;
  default:
    console.log("Nota inválida");
}

// 8. Implemente uma instrução `switch` que trate vários casos com a mesma lógica.

let tipoDeUsuario = "monitor";

switch (tipoDeUsuario) {
  case "admin":
  case "gerente":
  case "monitor":
    console.log("Você tem permissão de acesso total!");
    break;
  case "usuario":
  case "visitante":
    console.log("Você tem permissão de acesso limitado!");
    break;
  default:
    console.log("Tipo de usuário inválido!");
}

// 9. Crie uma função que use uma instrução `switch` para categorizar um número em diferentes intervalos e retornar uma mensagem.

function categorizarNumero(num) {
    switch (true) {
      case num >= 0 && num <= 10:
        return "O número está entre 0 e 10";
      case num > 10 && num <= 20:
        return "O número está entre 11 e 20";
      case num > 20 && num <= 30:
        return "O número está entre 21 e 30";
      case num > 30 && num <= 40:
        return "O número está entre 31 e 40";
      case num > 40:
        return "O número é maior que 40";
      default:
        return "O número é inválido";
    }
  }
  
  console.log(categorizarNumero(5)); 
  console.log(categorizarNumero(25)); 
  console.log(categorizarNumero(45)); 
  console.log(categorizarNumero(-5)); 
// 10. Escreva uma instrução `switch` que trate de instruções `switch` aninhadas para tomada de decisão complexa.

let usuario = {
    tipo: "monitor",
    nivel: 2,
    departamento: "marketing"
  };
  
  switch (usuario.tipo) {
    case "admin":
      console.log("Acesso total!");
      break;
    case "monitor":
      switch (usuario.nivel) {
        case 1:
          console.log("Acesso moderado - Nível 1");
          break;
        case 2:
          switch (usuario.departamento) {
            case "marketing":
              console.log("Acesso moderado - Nível 2 - Marketing");
              break;
            case "vendas":
              console.log("Acesso moderado - Nível 2 - Vendas");
              break;
            default:
              console.log("Acesso moderado - Nível 2 - Outro departamento");
          }
          break;
        default:
          console.log("Acesso moderado - Nível desconhecido");
      }
      break;
    case "usuario":
      console.log("Acesso limitado!");
      break;
    default:
      console.log("Tipo de usuário inválido!");
  }