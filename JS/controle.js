let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa(){
    //Pegar o valor digitado
    let valorInput = input.value;
    if((valorInput !=="") && (valorInput !==null) && (valorInput !==undefined)){
        
        ++contador;
        
        let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="fi fi-rr-circle"></i> 
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete">
                    <i class="fi fi-rr-trash"></i>Deletar
                </button>
            </div>`;
            
            //adiciona novo item
            main.innerHTML += novoItem;

            //metodo para limpar
            input.value = "";
            input.focus();
    }
}

function deletar(id){
    let tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if(classe == "item"){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('fi-rr-circle');
        icone.classList.add('fi-rr-check-circle');

        item.parentNode.appendChild(item);

    } else{
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('fi-rr-check-circle');
        icone.classList.add('fi-rr-circle');
    }
}

input.addEventListener("keyup", function(event){
    if(event.keyCode === 13){;
        btnAdd.click();
    }
})