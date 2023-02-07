const form = document.getElementById('form-agenda');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaContadorRegistros();
});

function adicionaLinha(){
    const inputNome = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('telefone-contato');

    if(nomes.includes(inputNome.value)){
        alert(`Já há um registro com o nome de ${inputNome.value} na agenda!`);
    }else{
        nomes.push(inputNome.value);
        numeros.push(inputTelefone.value);

        let linha = '<tr>';
        linha += '<td class="icone-person"><img src="./images/person.png.png" alt="Icone de contato"></td>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaContadorRegistros(){
    document.getElementById('qntd-registros').innerHTML = `Registros: ${nomes.length}`;
}