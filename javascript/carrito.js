// let pruebasss = [
//     // // // Creo  archivo de JS para empezar a interactuar con el carrito:
//     // // // lograr que cuando se seleccione cada una de las propiedades de los cuadros, se vayan agregando al array de CuadroTerminado. Luego, este ultimo pushearlo a un array de CarritoDeCompras, donde se pueden encontrar todos los cuadros creados, con sus precios y propiedades.


//     // // class CrearCuadro {
//     // //     constructor (tamaño, papel, montaje, marco){
//     // //         this.tamaño = tamaño,
//     // //         this.papel = papel,
//     // //         this.montaje = montaje,
//     // //         this.marco = marco
//     // //     }
//     // // }


//     // // // funcion de eleccion de tamaño:
//     // // function tamaños(tamañoElegido){
//     // //     switch(tamañoElegido){
//     // //             case 0:
//     // //             return ("Dimensiones: 80cm X 110cm")
//     // //             // break;
//     // //             case 1:
//     // //                 return ("Dimensiones: 60cm X 85cm")
//     // //                 // break;
//     // //             case 2:
//     // //             return ("Dimensiones: 42cm X 60cm")
//     // //             // break;
//     // //             case 3:
//     // //             return ("Dimensiones: 27cm X 42cm")
//     // //             // break;
//     // //             case 4:
//     // //             return ("Dimensiones: 27cm X 21cm")
//     // //             // break;
//     // //             case 5:
//     // //             return ("Dimensiones: 15 X 21cm")
//     // //             // break;
//     // //             default:
//     // //                 alert ("Porfavor seleccione un tamaño.")
//     // //     }
//     // // }

//     // // // funcion de papel: 
//     // // function papeles(papelElegido){
//     // //     if(papelElegido == 1){
//     // //         return ("Papel de impresion: 'BRILLO'")
//     // //     }
//     // //     else if(papelElegido == 2){
//     // //         return ("Papel de impresion: 'MATE'")
//     // //     }
//     // //     else if(papelElegido == 3){
//     // //         return ("Papel de impresion: 'FINEART'")
//     // //     }
//     // //     else{
//     // //         return ("Papel de impresion: 'Autoadhesivo'")
//     // //     }
//     // // }

//     // // // funcion de montaje:
//     // // function montajes(montajeElegido){
//     // //     switch (montajeElegido){
//     // //         case 1:

//     // //             return ('Montaje en Paspartou')
//     // //             // break
//     // //         case 2:
//     // //             return ("Montaje en Foamboard")
//     // //             // break
//     // //         case 3:
//     // //             return ("Montaje en Fibrofacil")
//     // //             // break
//     // //         default:
//     // //             return ("Montaje en Autoadhesivo.")
//     // //     }
//     // // }

//     // // // funcion para eleccion de marcos y si tiene o no vidrio:
//     // // function marcos(marcoElegido){
//     // //     if(marcoElegido == 1){
//     // //         return ("Marco de madera nogal")
//     // //     }
//     // //     else if (marcoElegido == 2){
//     // //         return("Marco madera nogal, con vidrio")
//     // //     }
//     // //     else if (marcoElegido == 3){
//     // //         return ("Marco de madera pino")
//     // //     }
//     // //     else if (marcoElegido == 4){
//     // //         return("Marco madera pino, con vidrio")
//     // //     }
//     // //     else (
//     // //         "sin marco"
//     // //     )
//     // //     }

//     // // // variables de solicitud de datos para la eleccion de propiedades, llamando a la fn de cada una de las propiedades y retornando el valor  de los condicionales: 
//     // // let tamañoElegido = tamaños (parseInt(prompt ("Elija el tamaño de impresion: 'A0' (0), 'A1' (1), 'A2' (2), 'A3' (3), 'A4' (4), ó, 'A5' (5)")));
//     // // // let papelElegido = papeles (parseInt( prompt ("Seleccionar papel: 'BRILLO' (1), 'MATE' (2), o 'FINEART' (3)") ));
//     // // let montajeElegido = montajes (parseInt ( prompt ("Seleccione el tipo de montaje: 'PASPARTOU' (1), 'FOAMBOARD' (2), o, 'FIBROFACIL' (3)") ) );   
//     // // let marcoElegido = marcos (parseInt ( prompt ("Elija su marco: 'MARCO NOGAL' (1), con vidrio (2), 'MARCO PINO' (3), con vidrio (4), 'SIN MARCO' (5).") ) ) ;


//     // // // para realizar la interaccion uso este tipo, uso click events, usando un select y las option para poder desplegar el menu de cada una de las opciones


//     // // // cuadro terminado con todas sus propiedades, para luego pushear al carrito de compras: 
//     // // const cuadroCreado = new CrearCuadro (tamañoElegido, papelElegido, montajeElegido, marcoElegido);
//     // // console.log(cuadroCreado);
//     // // carritoDeCompras.push(cuadroCreado);
//     // // console.log



//     // // let papelElegido = document.getElementById("#seleccionar-papel")
//     // // papelElegido.addEventListener("onchange", mostrarPapelElegido)
//     // // function papeles(papelElegido) {
//     // //     if (papelElegido == querySelector('.papel__brillo')) {
//     // //         console.log("Papel de impresion: 'BRILLO'");
//     // //     }
//     // //     else if (papelElegido == 2) {
//     // //         return ("Papel de impresion: 'MATE'")
//     // //     }
//     // //     else if (papelElegido == 3) {
//     // //         return ("Papel de impresion: 'FINEART'")
//     // //     }
//     // //     else {
//     // //         return ("Papel de impresion: 'Autoadhesivo'")
//     // //     }
//     // // }



//     // // let seleccionPapel = document.getElementById("papeles")
//     // // function select() {
//     // // console.log(selection.options[selection.selectedIndex].value);
//     // // }
//     // // let seleccionMontaje = selection[document.getElementById('montajes')];
//     // // function select() {
//     // //     console.log(selection.options[selection.selectedIndex].value);
//     // //     }


//     // // class para la creacion de cada cuadro, la cual despues se puseha al carrito de compras.

//     // class CrearCuadro {
//     //     constructor (tamaño, papel, montaje, marco){
//     //         this.tamaño = tamaño,
//     //         this.papel = papel,
//     //         this.montaje = montaje,
//     //         this.marco = marco
//     //     }
//     // }
//     //     function tamañoSeleccionar(){
//     //         let selectedValue = document.getElementById('seleccionTamaño').value;
//     //     console.log (selectedValue)

//     //     }
//     //     function papelSeleccionar(){
//     //         let selectedValue = document.getElementById ('seleccionPapel').value;
//     //     console.log (selectedValue)


//     //     }
//     //     function montajeSeleccionar(){
//     //         let selectedValue = document.getElementById('seleccionMontaje').value;
//     //     console.log (selectedValue)

//     //     }
//     //     function marcoSeleccionar(){
//     //         let selectedValue = document.getElementById ('seleccionMarco').value;
//     //         console.log (selectedValue);
//     //         if(selectedValue != "sin-marco"){
//     //             console.log ("marco con vidrio");
//     //         }
//     //         else{
//     //             console.log ("marco sin vidrio");
//     //         }

//     //     }





//     //                         // CONSULTA

//     //     // como hacer para que las selecciones se agreguen al class? porque con el return me lo devuelve vacio....:

//     //         // let tamañoSeleccionado = tamañoSeleccionar();
//     //     // let papelSeleccionado = papelSeleccionar();
//     //     // let montajeSeleccionado = montajeSeleccionar();
//     //     // let marcoSeleccionado = marcoSeleccionar();

//     //     // new CrearCuadro (tamañoSeleccionado, papelSeleccionado, montajeSeleccionado, marcoSeleccionado);


//     //     // /


//     //                             // para la entrega de proyecto final 


//     //     // seria mas conveniente crear un array de cada una de las propiedades? con los precios y particuliradedes de cada una de las opciones? y eso luego agregarlo al HTML con un "add" al innerHtml? 
//     //     // la segunda forma seria la mas logica y simple de implementar, a la vez creando la funcion de agregar a un carrito, sumando productos y precios.



//     //     //  creacion de arrays de productos (cada una de las propiedades de los cuadros), para con ADD añadirlos al html para q el cliente pueda elegir cada una y despues crear cad cuadro con la class y las fn.

//     // //     const tamaños = [
//     // //         {
//     // //             id: A0,
//     // //             dimensiones: "80cm x 110cm",
//     // //         },

//     // //         {
//     // //             id: A1,
//     // //             dimensiones: "60cm x 85cm",
//     // //         },

//     // //         {
//     // //             id: A2,
//     // //             dimensiones: "42cm x 60cm",
//     // //         },

//     // //         {
//     // //             id: A3,
//     // //             dimensiones: "27cm x 42cm",
//     // //         },

//     // //         {
//     // //             id: A4,
//     // //             dimensiones: "21cm x 27cm",
//     // //         },

//     // //         {
//     // //             id: A5,
//     // //             dimensiones: "15cm x 21cm",
//     // //         },
//     // //     ]


//     // //     class CuadroPropiedades {
//     // //         constructor (tamaño, papel, montaje, marco){
//     // //             this.tamaño = tamaño;
//     // //             this.papel = papel;
//     // //             this.montaje = montaje;
//     // //             this.marco = marco;
//     // //         }
//     // //     } 

//     // // let cuadroCreado = [];

//     // // function guardarCuadro(){
//     // //     const cuadrosFormulario = document.querySelector("#cuadroFormulario") //div?
//     // //     const nuevoCuadro = new CuadroPropiedades 
//     // //     (cuadrosFormulario.tamaño.value, 
//     // //     cuadrosFormulario.papel.value, 
//     // //     cuadrosFormulario.montaje.value, 
//     // //     cuadrosFormulario.marco.value);

//     // //     addEventListener ('click') => cuadroCreado.push (nuevoCuadro);
//     // //     console.log (cuadroCreado);
//     // // }


//     // const contenedorOpciones  = document.getElementById ("contenedorOpciones");

//     // stockCuadros.forEach((cuadro) => {
//     //     const div = document.createElement ('div')
//     //     div.classList.add ('cuadro')
//     //     div.innerHTML = `
//     //     <h4>"Tamaño${cuadro.nombre} en ${cuadro.papel}</h4>
//     //     <h6>"Montaje en ${cuadro.montaje} con marco ${cuadro.marco}</h6>
//     //     <h6>${cuadro.precio}</h6>
//     //     <button id:"agregarAlCarrito">"Agregar al Carrito"</button>`

//     //     contenedorOpciones.appendChild (div)
//     // })
// ]





// import { tamañoDeCuadro, papelDeCuadro} from "./seleccionPropiedades"


// stock de propiedades:


let tamañoDeCuadro = [

    {
        nombre: "Seleccionar Tamaño", dimensiones: "Seleccionar Tamaño", precio: ""
    },

    {
        nombre: "A0", dimensiones: "80cm x 110cm", precio: "$10000",
    },

    {
        nombre: "A1", dimensiones: "65cm x 80cm", precio: "$8000",
    },

    {
        nombre: "A2", dimensiones: "40cm x 60cm", precio: "$6000",
    },

    {
        nombre: "A3", dimensiones: "27cm x 40cm", precio: "$4000",
    },

    {
        nombre: "A4", dimensiones: "21cm x 27cm", precio: "$2000",
    },

    {
        nombre: "A5", dimensiones: "15cm x 21cm", precio: "$1000",
    },
]

let papelDeCuadro = [

    {
        nombre: "Seleccionar papel", precio: ""
    },
    {
        nombre: "Fineart 275g", precio: "$3000",
    },

    {
        nombre: "Fineart 260g", precio: "$2500",
    },

    {
        nombre: "Fineart 250g", precio: "$2000",
    },

    {
        nombre: "Mate", precio: "$1500",
    },

    {
        nombre: "Brillo", precio: "$1000",
    },
]

let montajeDeCuadro = [

    {
        nombre: "Seleccionar montaje", precio: ""
    },

    {
        nombre: "Paspartou", precio: "$2500"
    },

    {
        nombre: "Foamboard", precio: "$3000"
    },

    {
        nombre: "Fibrofacil", precio: "$2000"
    },
]

let marcoDeCuadro = [

    {
        nombre: "Seleccionar marco", precio: ""
    },

    {
        nombre: "Marco de nogal", precio: "$1000"
    },

    {
        nombre: "Marco de cipres", precio: "$1200"
    },

    {
        nombre: "Marco de pino", precio: "$800"
    },

    {
        nombre: "Sin marco", precio: ""
    }

]


const carritoDeCompras = []

// Llamado de variables DOM:

let tamañosDisponibles = document.getElementById("tamañosDisponibles");
let papelesDipsonibles = document.getElementById("papelesDisponibles");
let montajesDisponibles = document.querySelector("#montajesDisponibles");
let marcosDisponibles = document.querySelector("#marcosDisponibles");

//llamado de variables tipo BOTON para evento enviar al carrito:

let enviarAlCarritoButton = document.getElementById('enviarAlCarrito');


// inyeccion al DOM de las opciones:

function opcionesDom() {

    tamañoDeCuadro.forEach(
        (el) => (
            tamañosDisponibles.innerHTML += `<option value="${el.dimensiones}">${el.dimensiones} - ${el.precio}</option>`))
    papelDeCuadro.forEach((el) => (
        papelesDipsonibles.innerHTML += `<option value="${el.nombre}">${el.nombre}  - ${el.precio}</option>`
    ));

    montajeDeCuadro.forEach((el) => (
        montajesDisponibles.innerHTML += `<option value="${el.nombre}">${el.nombre} - ${el.precio}</option>`
    ));

    marcoDeCuadro.forEach((el) => (
        marcosDisponibles.innerHTML += `<option value="${el.nombre}">${el.nombre} - ${el.precio}</option>`
    ));


}

opcionesDom();


// funciones que retornan el valor de cada value seleccionado por el usuario para crear un CLASS de cuadro terminado, el cual se pushea al carrito de compras [];


function tamañoSeleccionado() {
    let tamañoSeleccionado = tamañosDisponibles.value;
    return (tamañoSeleccionado);

}

function papelSeleccionado() {
    let papelSeleccionado = papelesDisponibles.value;
    return(papelSeleccionado);

}

function montajeSeleccionado() {
    let montajeSeleccionado = montajesDisponibles.value
    return (montajeSeleccionado);
}


function marcoSeleccionado() {
    let marcoSeleccionado = marcosDisponibles.value;
    return (marcoSeleccionado); 
// crear fn para que cuando seleccione cada uno de los cuadros, este se coloque al rededor de la img mostrando como quedaria.
// crear IF para seleccionar si quieren con vidrio o sin vidrio cada cuadro. 
}


// FUNCION DE SUMA DE PRECIOS:
// function sumaPrecios(){
//     opcionesDom.forEach(el.precio){
//         el.precio ++ 
//     }
// }



// clase constructora de cada uno de los cuadros con cada una de las propiedades seleccionadas por el usuario. 

class CuadroCreado {

    constructor(tamaño, papel, montaje, marco) {
        this.tamaño = tamaño,
            this.papel = papel,
            this.montaje = montaje,
            this.marco = marco

    }

}

// FUNCION DE EVENTO PARA ENVIAR EL CLASS CON LAS PROPIEDADES AL CARRITO

function enviarAlCarritoFn() {
        let cuadroTerminado = ""
    enviarAlCarritoButton.addEventListener("click", () => (
        cuadroTerminado = new CuadroCreado (tamañoSeleccionado(), papelSeleccionado (), montajeSeleccionado(), marcoSeleccionado()),
        carritoDeCompras.push(cuadroTerminado),
        console.log(carritoDeCompras.splice (","))
    )
    )
}
enviarAlCarritoFn()

localStorage.setItem ('Carrito de compras', carritoDeCompras);
localStorage.getItem (carritoDeCompras)



