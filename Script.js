function imprimir(){
    window.print()
}
function calcular(){
    let precio = 20
    let iva=5
    let final=precio+iva;   
    window.alert( precio+iva); //Esto suma
    window.alert(precio-iva); //Esto resta
    window.alert(precio/iva); //Esto divide
    window.alert(precio*iva); //Esto multiplica
    window.alert(precio%iva); //Esto no se
    window.alert(precio**iva); //Esto eleva
}
var clicks = 0;

function onClick(){
    clicks += 1;
    document.getElementById('clicks').innerHTML = clicks;
}
function pruebaArrays(){
    alumnos =['Pedro','Pau','Toni','Jose','Pepe'];
    mostrarAlumnos();
}
   /*
    alumnos.shift(); //quitar primer elemento
    alumnos.pop(); //quitar ultimo elemento  
    */
  
function mostrarAlumnos(){
    let textoAlumnos = "<ul>"
    for(let i=0;i<alumnos.length;i++){
        textoAlumnos += "<li>" + alumnos[i] + "</li>";
    }
    textoAlumnos += "</ul>";
    document.getElementById("listaAlumnos").innerHTML=textoAlumnos;
}
function borrar1(){
    alumnos.shift();
    mostrarAlumnos();
    if (alumnos.lenght === 0){
        document.getElementById("listaAlumnos").innerHTML="NO";   
    }
}
function borrar2(){
    alumnos.pop();
    mostrarAlumnos();
    if (alumnos.lenght === 0){
        document.getElementById("listaAlumnos").innerHTML= "NO";
    }
}
