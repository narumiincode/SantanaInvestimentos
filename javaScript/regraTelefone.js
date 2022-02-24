function telefone(telefone){
    // alert('funfo');
    const textoAtual = telefone.value
    const isCelular = textoAtual.length === 11;
    let textoAjustado;
    // let textoAtual= document.getElementById('tel');

    if(isCelular) {
        const parte1 = textoAtual.slice(0,2);
        const parte2 = textoAtual.slice(2,7);
        const parte3 = textoAtual.slice(7,11);
        textoAjustado = `(${parte1})${parte2}-${parte3}`        
    } else {
        const parte1 = textoAtual.slice(0,2);
        const parte2 = textoAtual.slice(2,6);
        const parte3 = textoAtual.slice(6,10);
        textoAjustado = `(${parte1})${parte2}-${parte3}`
    }
    telefone.value = textoAjustado;
    console.log(textoAjustado);
}

var count = 10;
var redirect = "../siteModelo/index.html";
 
function countDown(){
    var timer = document.getElementById("timer");
    if(count > 0){
        count--;
        timer.innerHTML = "Você será redirecionado a nossa página principal em "+count+" segundos.";
        setTimeout("countDown()", 1000);
    }else{
        window.location.href = redirect;
    }
}
countDown();