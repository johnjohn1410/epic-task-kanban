const tarefas = JSON.parse( localStorage.getItem("tarefas") ) || []

tarefas.forEach(tarefa => card(tarefa))

function card (tarefa){
    const cardTarefa = `
        <p class="title">${tarefa.titulo}</p>
        <p>${tarefa.descricao}</p>
        <div class="progress" role="progressbar" aria-label="Basic example" value="('${tarefa.id}')" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar"></div>
        </div>
        <button onclick="dec('${tarefa.id}')" class="btn btn-outline-primary">-</button>
        <button onclick="apagar('${tarefa.id}')" class="btn btn-outline-danger">Apagar</button>
        <button onclick="inc('${tarefa.id}')" class="btn btn-outline-primary">+</button>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${tarefa.pontos}</h5>
            </div>
        </div>   
    ` 
    const card = document.createElement("div")
    card.id=tarefa.id
    card.innerHTML = cardTarefa
    document.querySelector("#lista-de-tarefas").appendChild(card)
}