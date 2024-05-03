const tarefas = JSON.parse( localStorage.getItem("tarefas") ) || []

tarefas.forEach(tarefa => card(tarefa))

function card (tarefa){
    const cardTarefa = `
    <div class="container 1">
        <p class="title">${tarefa.titulo}</p>
        <p>${tarefa.descricao}</p>
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" style="width: 50%"></div>
        </div>
        <button type="button" class="btn btn-outline-primary">-</button>
        <button type="button" class="btn btn-outline-danger">Apagar</button>
        <button type="button" class="btn btn-outline-primary">+</button>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${tarefa.pontos}</h5>
            </div>
        </div>
    </div>    
    ` 
    const card = document.createElement("div")
    card.innerHTML = cardTarefa
    document.querySelector("#lista-de-tarefas").appendChild(card)
}