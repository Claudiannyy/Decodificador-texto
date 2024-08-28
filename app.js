const mensagem = document.querySelector(".inserir-mensagem");
const resultado = document.querySelector(".resultado");

// Verifica a condição dos caracteres permitidos 
function verificacaoDaCondicao(texto) {
    const condicao = /^[a-z\s]+$/;
    return condicao.test(texto);
}

// Retira a imagem do robo com a lupa e mostra o botão de copiar
function alteracaoInterface() {
    const conteudo = document.querySelector(".conteudo-direita");
    conteudo.classList.add('escondido');
    
    const mostrarBotaoCopiar = document.querySelector(".botao-copiar");
    mostrarBotaoCopiar.classList.remove('escondido'); 

    const mostrarResultado = document.querySelector(".resultado");
    mostrarResultado.classList.remove('escondido');
}

// Função para criptografar o texto
function iniciarCriptografia() {
    const texto = mensagem.value;
    const alteracaoVogais = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    alteracaoInterface();
    resultado.innerHTML = alteracaoVogais;
}

// Função para descriptografar o texto
function iniciarDescriptografar() {
    const texto = mensagem.value;
    const organizandoVogais = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    alteracaoInterface();
    resultado.innerHTML = organizandoVogais;
}

// Iniciar a criptografia
function criptografar() {
    const texto = mensagem.value;
    if (verificacaoDaCondicao(texto)) {
        iniciarCriptografia();
    } else {
        alert('Digite apenas texto sem acento e sem letra maiúscula');
    }
}

// Iniciar a descriptografia
function descriptografar() {
    const texto = mensagem.value;
    if (verificacaoDaCondicao(texto)) {
        iniciarDescriptografar();
    } else {
        alert('Digite apenas texto sem acento e sem letra maiúscula');
    }
}
// Copiar para a área de transferência
function Copiar() {
    const textoParaCopiar = resultado.innerText;
    navigator.clipboard.writeText(textoParaCopiar)
        .then(() => {
            alert('Texto copiado para a área de transferência!');
        })
}
