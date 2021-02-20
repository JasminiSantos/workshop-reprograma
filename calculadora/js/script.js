function calcularValorHora(){
    let ganhoMes = document.getElementById("ganho-mes").value;
    let horasDia = document.getElementById("horas-dia").value;

    let horasMes = horasDia*22;
    let valorHora = ganhoMes/horasMes;
    
    let resultado = document.getElementById("resposta"); 
    resultado.textContent = ("R$ " + valorHora.toFixed(2)).replace(".",",");
}