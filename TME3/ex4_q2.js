function A(){
    document.getElementById("liste1").appendChild(document.getElementById("liste2").firstChild);
    if (document.getElementById("liste2").firstChild == null){
        document.getElementById("btn_2vers1").disabled = true;
    }
}

function V(){
    document.getElementById("liste2").appendChild(document.getElementById("liste1").firstChild);
    if (document.getElementById("liste1").firstChild == null){
        document.getElementById("btn_1vers2").disabled = true;
    }
}

document.getElementById("btn_2vers1").addEventListener("click", A);
document.getElementById("btn_1vers2").addEventListener("click", V);