var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.getElementById("ul");
var item = document.getElementsByTagName("li");/* serão aplicadas as ações no meu Li que só passa a existir quando uma tarefa é criada, não utilizado o ID pq serão várias tags li*/


function inputLength(){
    return input.value.length;/*só registra se houver um número de caracteres específicos, para ser considerado uma tarefa*/
}

function createListElement(){
    var li = document.createElement("li");/* cria um elemento li, quando chamar essa funcção cria-se o li e armazena nessa variável*/

    li.appendChild(document.createTextNode(input.value));/* O apend child um nó ao final da lista de filhos de um nó especificado, ela adiciona elemento pai é o li e o elemento filho é o valor que criamos , quando inserimos uma nova tarefa, vai setar dentro do filho o valor do nosso input em formato de texto*/
    ul.appendChild(li);
    input.value = ""; /* reseta o texto após ser adicionado uma tarefa nova a lista, deixa o campo input limpinho*/

    function crossOut(){
        li.classList.toggle("done");    /*habilita mudança de cor (background)de cada tarefa concluída, cria e exclui class de acordo com o status done*/
    }

    li.addEventListener("click",crossOut);/*evento de click no meu li, muda a cor*/ 

    var delBtn = document.createElement("button");/*criando o elemento  botão de delete(elemento pai)*/
    delBtn.appendChild(document.createTextNode("X"));/*criando o X, para excluir uma tarefa da lista(elemento filho)*/
    li.appendChild(delBtn);/*registrar a variável, dentro do li*/
    delBtn.addEventListener("click", deleteListItem);

    function deleteListItem(){
        li.classList.add("delete");/* add somente cria a classe, diferente do toogle que exclui e cria*/
  }
 
}

/*REGISTRAR AS TAREFAS*/

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function addListAfterClick(){
    if (inputLength() > 8){
        createListElement();
    }
}

function addListAfterKeypress(){
    if(inputLength() > 0 && event.which === 13){ /* o número 13 é o código chave da tecla enter, só quando clicar no enter é que será chamado esse evento,ou seja o nª de caracteres tem que ser maior que 8 e também preciso clicar no enter */
    createListElement();

    }
}