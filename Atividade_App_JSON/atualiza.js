$(document).ready(function(){
    $.get("http://localhost:4003/", function(data){
    for(let i;i<data.lenght;i++){

        
    document.getElementById('tudo').innerHTML +=`data:${data}`
     }
    });
});
