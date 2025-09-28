// Array que vai armazenar todos os alunos cadastrados
let alunos = [];

// Função para cadastrar um novo aluno no array
export function cadastrarAluno(dados) {
  // Se a média for >= 6 o aluno é aprovado, senão reprovado
  const resultado = parseFloat(dados.media) >= 6 ? "Aprovado" : "Reprovado";

  // Adiciona um objeto aluno no array, convertendo RA para inteiro e média para float
  alunos.push({
    ...dados,                    // copia os outros campos do objeto dados
    ra: parseInt(dados.ra),      // garante que o RA é um número
    media: parseFloat(dados.media), // garante que a média é número decimal
    resultado,                   // adiciona o campo resultado calculado acima
  });
}

// Função que retorna todos os alunos cadastrados
export function getAlunos() {
  return alunos; // simplesmente devolve o array atual
}

// Função Bubble Sort para ordenar arrays de objetos
export function bubbleSort(arr, campo, decrescente = false) {
  // cria uma cópia para não modificar o array original
  let copia = [...arr];
  let n = copia.length;
  let trocou;

  do {
    trocou = false; // marca se houve troca nesta passagem
    for (let i = 0; i < n - 1; i++) {
      if (decrescente) {
        // Se ordem decrescente, troca se o atual for menor que o próximo
        if (copia[i][campo] < copia[i + 1][campo]) {
          let temp = copia[i];
          copia[i] = copia[i + 1];
          copia[i + 1] = temp;
          trocou = true;
        }
      } else {
        // Se ordem crescente, troca se o atual for maior que o próximo
        if (copia[i][campo] > copia[i + 1][campo]) {
          let temp = copia[i];
          copia[i] = copia[i + 1];
          copia[i + 1] = temp;
          trocou = true;
        }
      }
    }
    n--; // otimização: último elemento já está na posição correta
  } while (trocou); // repete enquanto houver trocas

  // retorna o array ordenado
  return copia;
}

// Relatório: alunos em ordem crescente por nome
export function relatorioPorNome() {
  return bubbleSort(getAlunos(), "nome");
}

// Relatório: alunos em ordem decrescente por RA
export function relatorioPorRAdecrescente() {
  return bubbleSort(getAlunos(), "ra", true);
}

// Relatório: apenas aprovados em ordem crescente por nome
export function relatorioAprovadosPorNome() {
  // Filtra primeiro só os aprovados
  const aprovados = getAlunos().filter(a => a.resultado === "Aprovado");
  // Depois ordena pelo nome
  return bubbleSort(aprovados, "nome");
}
