var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#container input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list-todos')) || [];


function renderTodos(){
    listElement.innerHTML = ''; // apaga conteúdo anterior do HTML

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo); // recupera o indice do vetor em cada loop
        linkElement.setAttribute('onclick', 'removeTodos('+ pos +')');

        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos()

function addTodo(){
    var todoText = inputElement.value;
    if(todoText === ''){
        alert('Valor inválido!');
    }else{
        todos.push(todoText);
        inputElement.value = '';
        
        renderTodos();
        saveToStorage();
    }
}

buttonElement.onclick = addTodo;

function removeTodos(pos){
    todos.splice(pos, 1); // Splice remove todos os itens, Segundo parâmetro define a exclusão de apenas um.
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list-todos', JSON.stringify(todos)); 
}