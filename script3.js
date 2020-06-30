function contar (){
    var Ini = Number(window.document.getElementById('inicio').value)
    var Fim = Number(window.document.getElementById("fim").value)
    var Pas = Number(window.document.getElementById("passo").value)
    var res = window.document.getElementById("res")
    res.innerHTML= " "
    for (var i = Ini; i <= Fim ; i = i + Pas){
        if (i == Fim){
            res.innerHTML += `${i}.`    
        } else {
            res.innerHTML += `${i},`
        }
    
    }
}
