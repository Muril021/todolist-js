let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

function renderTarefas() {
	listElement.innerHTML = '';

	tarefas.map((tarefa) => {
		let liElement = document.createElement("li");
		let tarefaText = document.createTextNode(tarefa);

		let linkElement = document.createElement("a");
		linkElement.setAttribute("href", "#");

		let linkText = document.createTextNode("Excluir");
		linkElement.appendChild(linkText);

		let posicao = tarefas.indexOf(tarefa);

		linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`);

		listElement.appendChild(liElement);
		liElement.appendChild(tarefaText);
		liElement.appendChild(linkElement);
	})
}

renderTarefas();

function addTarefas() {
	if (inputElement.value === '') {
		alert("Digite alguma tarefa!");

		return false;
	} else {
		let novaTarefa = inputElement.value;

		tarefas.push(novaTarefa);
		inputElement.value = '';

		renderTarefas();
		salvarDados();
	}
}

buttonElement.onclick = addTarefas;

function deletarTarefa(posicao) {
	tarefas.splice(posicao, 1);
	renderTarefas();
	salvarDados();
}

function salvarDados() {
	localStorage.setItem("@listaTarefas", JSON.stringify(tarefas));
}