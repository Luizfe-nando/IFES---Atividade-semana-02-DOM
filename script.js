var cachorros = [{ "nome": "Thor", "imagem": "dog1" }, { "nome": "Zeca", "imagem": "dog2" }, { "nome": "Zeus", "imagem": "dog3" }, { "nome": "Pingo", "imagem": "dog4" }];

var gatos = [{ "nome": "Dunga", "imagem": "cat1" }, { "nome": "Mika", "imagem": "cat2" }, { "nome": "Conan", "imagem": "cat3" }, { "nome": "Messi", "imagem": "cat4" }];

// Selecionar elemento 'select_animais' ( 1 ponto)
let select = document.querySelector("#select_animais");
// Selecionar elemento 'container' ( 1 ponto)
let galery = document.querySelector('#container');
// Selecionar elemento 'nome' ( 1 ponto)
let nome = document.querySelector('#nome');
// Adicionar Listener 'input' ao elemento 'select_animais' (1 ponto)
select.addEventListener('input', listarAnimais);
// Adicionar Listener 'mouseover' ao elemento 'container' (1 ponto)
galery.addEventListener('mouseover', mostrarNome);
// Adicionar Listener 'mouseout' ao elemento 'container' (1 ponto)
galery.addEventListener('mouseout', limparNome);

function listarAnimais() { // Implementação da função (10 pontos)
  limparDivContainer();
  
  let especie;
  if(select.value === "cat"){
    especie = gatos;
  }else if(select.value === "dog"){
    especie = cachorros;
  }
  // Implementar...
  // Criar elementos do tipo <img src=./img/....
  
  especie.forEach(function(animal) {
    var imagem = document.createElement("img");
    imagem.src = `./img/${animal.imagem}.jpg`;
    imagem.setAttribute("data-nome", animal.nome);
    container.appendChild(imagem);
  });
}
  
  // Fazer com que os elementos img sejam filhos do elemento 'container'
 


function mostrarNome(e) { // Implementação da função (4 pontos)
  // Implementar...
  let target = event.target;
  if (target.tagName === "IMG"){
    nome.innerText = target.getAttribute("data-nome");
  }
}

function limparNome() {
  p.innerText = "";
}

// Função para limpar as imagens antigas, antes de inserir novas imagens
function limparDivContainer() {
  var elemento = document.querySelector("#container");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}