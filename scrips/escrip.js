let li = document.querySelectorAll('.prb');
li.onclick = function () {
    li.classList.toggle('active');
}
/*
Animacion
var t = setInterval(move, 10);

//start
var pos = 0;
var p2 = 0;
var p3 = 0;
var p4 = 0;
//our box element
var box = document.getElementById("box");

function move() {
    if(pos >= 150){
        if(p2 >= 150){
            if(p3 >= 150){
                move2();
            }
            else {
            pos = 0;
            p3 += 1;
            box.style.right = pos + "px";
            }
        }
        else {
            p2 += 1;
            box.style.top = p2 + "px";
        }

    }
    else{
    pos += 1;
    box.style.left = pos+"px";
    }
}

function move2() {
    console.log()
}
*/
/*
EL priblema del caracol
main()
function main() {
    var depht = prompt("Ingrese la altura del cubo");
    var distancias = 0;
    var dias = 0;
    while( depht >= distancias) {
        distancias += 7;
        dias += 1;
        if( distancias< depht){
            distancias -= 2;
        }
        else {
            console.log(dias);
            break;
        }
    }
}
*/

/*
crear elemntos
var p = document.createElement("p");
var text = document.createTextNode("Esto es un texto");
p.appendChild(text);

var div = document.getElementById("container");
div.appendChild(p);
*/
/*
var respuesta = prompt("Como estas?", "bien")

alert(respuesta)
*/
