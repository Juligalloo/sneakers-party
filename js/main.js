

let usuario = prompt ("ingrese su usuario")

if (usuario == "") {
    alert ("no olvide ingresar su usuario para poder comprar")
} else{
    document.write ("bienvenido a sneakers party " + "" + usuario)
}

alert ("bienvenidos a nuestra pagina");

let marca = prompt("ingresar marca al gusto, ofrecemos Nike, Adidas, Jordan, Puma y Vans")

switch (marca){
    case "nike":
        console.log ("escogiste nike");
        break
    case "adidas":
        console.log ("escogiste adidas");
        break
    case "Jordan":
        console.log ("escogiste Jordan");
        break
    case "Puma":
        console.log ("escogiste Puma");
        break
    case "vans":
        console.log ("escogiste vans");
        break

    default:
        console.log ("escogiste " +  "" + marca)

    
}

if (marca == "") {
    alert("le recomendamos que escoga una marca de las que presentamos")
} else{
    document.write(" , exelente decision, usted ha escogido " + marca)
}
 
function elegir (marca, talle) {
    console.log (usuario + " ha escogido unas " + marca + " de talle " + talle)
}

let talle = Number (prompt("¿Que talle estaria buscando, tenemos del 37 al 42. Trabajamos con talles US"))
    
elegir(marca, talle)
 
