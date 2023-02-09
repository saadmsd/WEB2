function add(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("texte"));
    document.getElementById("listecommissions").appendChild(li);
}

function supp(){
    var list = document.getElementById("listecommissions");
    list.removeChild(list.lastChild);
}


document.getElementById("btn_supp").addEventListener("click", supp);

document.getElementById("btn_add").addEventListener("click", add);