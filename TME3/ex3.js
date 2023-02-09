function add(){
    var a = Number(document.getElementById("nb1").value);
    let b = Number(document.getElementById("nb2").value);
    let resultat = a+b;
    console.log("Le résultat de l'addition est : " + resultat);
    if (event.shiftKey) {
        console.log("La touche Shift était maintenue enfoncée lors du clic.");
    }
}

document.getElementById("btn_ok").addEventListener("click", add);