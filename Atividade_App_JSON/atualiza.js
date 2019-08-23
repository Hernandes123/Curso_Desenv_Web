$(document).ready(function(){
    $.get( "http://localhost:3003/", function(data) {
  
      for(let i=0; i<data.length; i++)
      {
        document.getElementById("lista").innerHTML += `inicio_execucao: ${data[i].inicio_execucao} `
        document.getElementById("lista").innerHTML += `area_conhecimento: ${data[i].area_conhecimento} <br>`
      }
    });
  });

