/* Definición de Variables*/

var i = 0
var acumulado = 0
var iva = 0
var cont = 0

alert("BIENVENIDO") 

/*Creación de array de objetos*/

const productos = [ 
    {id:1, nombre:"Vincha",precio: 250},
    {id:2, nombre:"Cartera",precio: 3000},
    {id:3, nombre:"Campera", precio:1200}
]

alert("LISTA DE PRODUCTOS DISPONIBLES")

mostrarProductos() /*Llamada a la función de mostrarProductos*/
incluirIva() /*LLamada a la función incluirIva()

/*mostrarProductos()
Dicha función mostrará al usuario cada uno de los productos 
consultandolé si desea agregarlo al "carrito" 
y la cantidad deseada mostrando el SubTotal y 
el Total de la compra simulada.*/

function mostrarProductos(){
    for (const producto of productos) {
        alert("Producto N°: "+producto.id +"." + " Nombre: " + producto.nombre + "." + " Precio: $" + producto.precio + ".")
        alert("¿Desea agregar a su compra: " + producto.nombre + "? "+ "Precio: $" + producto.precio +".")
    
        var resp = parseInt(prompt("0 Si, 1 No"))
    
        if (resp == 0){
            alert("¡¡Producto Agregado!!")
    
            var cantidad = parseFloat(prompt("Ingrese la cantidad de su producto"))        
            var acumulado = calcularSubTotal(producto.precio,cantidad) 
            cont = cont + acumulado
    
            alert("Su subTotal es de: $" + calcularSubTotal(producto.precio,cantidad))
        } 
    
        alert("Su TOTAL es de: $"+ cont)
    
    }
}


/*incluirIva
Una vez que el usuario selecciono sus productos y tiene un Total final de la compra
se le consultará si desea incluir el IVA seteado en el 21% de la compra.*/

function incluirIva(){
    iva = parseInt (prompt("¿Desea añadir IVA? 0 Si , 1 No"))

    if (iva == 0){
        alert("Su Total incluyendo IVA es de: $" + calcularIVA(cont))
    
        cont = calcularIVA(cont)
        incluirEnvio() /*Llamada a la función incluirEnvio()*/
    } else {
        incluirEnvio()/*Llamada a la función incluirEnvio()*/
    }
}

/*incluirEnvio() =
Dicha función le permitirá al usuario ingresar el costo del envió*/

function incluirEnvio(){
    envio = parseInt(prompt("¿Desea añadir envio? 0 Si , 1 No"))

    if (envio == 0){
        var precioEnvio = parseFloat(prompt("Ingrese el precio de su envio"))

        alert("Su Total Final es de: $" + parseInt(calcularEnvio(cont,precioEnvio)))
    } else {
        alert("Su Total Final fue de: $" + cont)
    }
}


/*calcularSubTotal(precio,cantidad)
Dicha función recibirá el precio y la cantidad de los productos seleccionados
y calculará el total multiplicando el precio con la cantidad.*/
function calcularSubTotal(precio,cantidad){
    return(precio * cantidad)
}
/*calcularIVA(cont)
Dicha función recibirá el total de la compra del usuario y le incluirá el IVA 
en caso de ser llamada *0.21 representa el 21% de IVA teniendo en cuenta el índice actual
en Argentina.*/
function calcularIVA (cont){
    return (cont + (cont* 0.21))
}
/*calcularEnvio(cont,precioEnvio)
Dicha función recibirá el total final de la compra y le añadirá el precio del envio.*/
function calcularEnvio(cont,precioEnvio){
    return(cont+precioEnvio)
}







