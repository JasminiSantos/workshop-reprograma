function calcular(){
    let valorHora = document.getElementById("valor-hora").value;
    console.log("Valor Hora: R$ " + valorHora);

    let horasProjeto = document.getElementById("horas-projeto").value;
    console.log("Horas Projeto: " + horasProjeto);



    let valorTotal = ("R$ " + (valorHora*horasProjeto).toFixed(2)).replace(".", ",");
    console.log("Resposta: " + valorTotal);
    document.getElementById("resposta").textContent = valorTotal;
}