$(document).ready(function(){
    $.get("http://localhost:3003/", function(){
        for(let i=0; i<DataCue.length;i++){
            document.getElementById("lista").innerHTML += `Matricula:${data[1].matricula}`
            document.getElementById("lista").innerHTML += `Nome:${data[1].nome}`
            document.getElementById("lista").innerHTML += `Cargo:${data[1].cargo_emprego}`
            document.getElementById("lista").innerHTML += `Situação:${data[1].situacao.nome}`
            
        }
    })
})