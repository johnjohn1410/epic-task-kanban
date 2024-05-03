function apagar(id){

    document.querySelector(`#${id}`).remove()

    const tarefas = JSON.parse(localStorage.getItem("tarefas"))
    const tarefasAtualizadas = tarefas.filter( (t) => t.id !== id )
    Storage.setItem("tarefas", JSON.stringify(tarefasAtualizadas))

}