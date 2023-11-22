const dadosDosBlocos = [
  {
    imagem: "/assets/carnval1.png",
    nome: "O Python do vovô não sobe mais",
    descricao:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    cidade: "São Paulo",
    estado: "SP",
  },
  {
    imagem: "/assets/carnval2.png",
    nome: "Todo mundo null",
    descricao:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    cidade: "Rio de Janeiro",
    estado: "RJ",
  },
  {
    imagem: "/assets/carnval3.png",
    nome: "Hoje dou exception",
    descricao:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    cidade: "Rio de Janeiro",
    estado: "RJ",
  },
  {
    imagem: "/assets/carnval4.png",
    nome: "Manda Node",
    descricao:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    cidade: "São Paulo",
    estado: "SP",
  },
  {
    imagem: "/assets/carnval5.png",
    nome: "Só no back-end",
    descricao:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    cidade: "Belém",
    estado: "PA",
  },
  {
    imagem: "/assets/carnval6.png",
    nome: "Esse anel não é de Ruby",
    descricao:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    cidade: "Rio de Janeiro",
    estado: "RJ",
  },

  {
    imagem: "/assets/carnval7.png",
    nome: "Pimenta no C# dos outros é refresco",
    descricao:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    cidade: "Belém",
    estado: "PA",
  },

  {
    imagem: "/assets/carnval8.png",
    nome: "EnCACHE aqui",
    descricao:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    cidade: "Rio de Janeiro",
    estado: "RJ",
  },

  {
    imagem: "/assets/carnval9.png",
    nome: "Não valho nada mas JAVA li",
    descricao:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    cidade: "São Paulo",
    estado: "SP",
  },
];

const inputCidade = document.getElementById("nome");
const btnBuscar = document.getElementById("btn");
const conteudoElement = document.getElementById("conteudo");

// Função para renderizar o conteúdo com base nos dados iniciais
function renderizarConteudo(dados) {
  conteudoElement.innerHTML = "";

  dados.forEach(function (bloco) {
    const novoElemento = document.createElement("div");
    novoElemento.classList.add("cards");
    novoElemento.innerHTML = `

    <img src="${bloco.imagem}" alt="Imagem do Bloco">
                              <h3>${bloco.nome}</h3>
                              <p>${bloco.descricao}</p>
                              <span class="local">${bloco.cidade} - ${bloco.estado}</span>
                              </div>`;

    conteudoElement.appendChild(novoElemento);
  });
}

window.onload = function () {
  renderizarConteudo(dadosDosBlocos);
};

btnBuscar.addEventListener("click", function () {
  realizarFiltragem();
});

inputCidade.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    realizarFiltragem();
  }
});

function realizarFiltragem() {
  const inputFiltro = dadosDosBlocos.filter(function (bloco) {
    const consulta = inputCidade.value.toLowerCase();
    const cidadeMinuscula = bloco.cidade.toLowerCase();
    const nomeMinuscula = bloco.nome.toLowerCase();
    return (
      cidadeMinuscula.includes(consulta) ||
      nomeMinuscula.includes(consulta) ||
      bloco.estado.toLowerCase() === consulta ||
      bloco.nome.toLowerCase() === consulta ||
      bloco.cidade.toLowerCase() === consulta ||
      "" === consulta
    );
  });

  renderizarConteudo(inputFiltro);
}
