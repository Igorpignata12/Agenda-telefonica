const form = document.getElementById('form-agenda');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const nomeUsuario = document.getElementById('usuario-nome');
    const telefoneUsuario = document.getElementById('usuario-telefone');

    if(nomes.includes(nomeUsuario.value)){
        alert(`O usuário: ${nomeUsuario.value} já foi inserido!`)
    }else{
        nomes.push(nomeUsuario.value);
        telefones.push(parseFloat(telefoneUsuario.value));
    
        let = linha = '<tr>';
        linha += `<td>${nomeUsuario.value}</td>`;
        linha += `<td>${telefoneUsuario.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    nomeUsuario.value = '';
    telefoneUsuario.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

