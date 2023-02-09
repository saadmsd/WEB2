console.log("Hello world!");
var var_var = 1;
let var_let = 2;
const var_const = 3;

console.log(var_var);
console.log(var_let);
console.log(var_const);

var_var = 10;
var_let = 20;
try{
    var_const = 30;
}catch(e){
    console.error("FAUX");
}

let obj = {prop1: 1, prop2: 2, prop3: 4};

function f(obj){
    obj2 = Object.create(obj);
    for (let i in obj){
        if (obj[i] % 2 == 0){
            obj2[i] = obj[i] + " est pair";
        }
        else{
            obj2[i] = obj[i] + " est impair";
        }
    }
    return obj2;
}

function fleche(x, nombre){
    if (x % nombre == 0){
        return true;
    }
    else{
        return false;
    }
}

function tab(){
    let tab = [];
    for (let i = 0; i < 20; i++){
        tab.push(Math.floor(Math.random() * 100));
    }
    return tab;
}

function tab2(){
    let tab = [];
    for (let i = 0; i < 20; i++){
        tab.push(Math.floor(Math.random() * 100));
    }
    console.log(tab);
    let tab2 = tab.map(tab => tab / 2);
    return tab2;
}

function tab3(){
    let tab = [];
    for (let i = 0; i < 20; i++){
        tab.push(Math.floor(Math.random() * 100));
    }
    console.log(tab);
    let tab2 = tab.filter(tab => tab % 3 == 0);
    return tab2;
}

console.log(tab3());
