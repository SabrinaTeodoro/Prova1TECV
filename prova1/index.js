function envio(event, form){
    event.preventDefault();
    //console.log(form);
    plotaTexto(form.nome.value, form.sobrenome.value);
}
function plotaTexto(nome, sobrenome){
    console.log(nome, sobrenome);
    const campo = document.getElementById("novoTexto");
    campo.innerText = `${nome} ${sobrenome}`;
}