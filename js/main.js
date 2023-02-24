

let usuario = prompt ("ingrese su usuario")

if (usuario == "") {
    alert ("no olvide ingresar su usuario para poder comprar")
} else{
    document.write ("bienvenido a sneakers party " + "" + usuario)
}

alert ("bienvenidos a nuestra pagina");

let marca = prompt("ingresar marca al gusto")

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




