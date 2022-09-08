// // Creo  archivo de JS para empezar a interactuar con el carrito:
// // lograr que cuando se seleccione cada una de las propiedades de los cuadros, se vayan agregando al array de CuadroTerminado. Luego, este ultimo pushearlo a un array de CarritoDeCompras, donde se pueden encontrar todos los cuadros creados, con sus precios y propiedades.


// class CrearCuadro {
//     constructor (tamaño, papel, montaje, marco){
//         this.tamaño = tamaño,
//         this.papel = papel,
//         this.montaje = montaje,
//         this.marco = marco
//     }
// }


// // funcion de eleccion de tamaño:
// function tamaños(tamañoElegido){
//     switch(tamañoElegido){
//             case 0:
//             return ("Dimensiones: 80cm X 110cm")
//             // break;
//             case 1:
//                 return ("Dimensiones: 60cm X 85cm")
//                 // break;
//             case 2:
//             return ("Dimensiones: 42cm X 60cm")
//             // break;
//             case 3:
//             return ("Dimensiones: 27cm X 42cm")
//             // break;
//             case 4:
//             return ("Dimensiones: 27cm X 21cm")
//             // break;
//             case 5:
//             return ("Dimensiones: 15 X 21cm")
//             // break;
//             default:
//                 alert ("Porfavor seleccione un tamaño.")
//     }
// }

// // funcion de papel: 
// function papeles(papelElegido){
//     if(papelElegido == 1){
//         return ("Papel de impresion: 'BRILLO'")
//     }
//     else if(papelElegido == 2){
//         return ("Papel de impresion: 'MATE'")
//     }
//     else if(papelElegido == 3){
//         return ("Papel de impresion: 'FINEART'")
//     }
//     else{
//         return ("Papel de impresion: 'Autoadhesivo'")
//     }
// }

// // funcion de montaje:
// function montajes(montajeElegido){
//     switch (montajeElegido){
//         case 1:

//             return ('Montaje en Paspartou')
//             // break
//         case 2:
//             return ("Montaje en Foamboard")
//             // break
//         case 3:
//             return ("Montaje en Fibrofacil")
//             // break
//         default:
//             return ("Montaje en Autoadhesivo.")
//     }
// }

// // funcion para eleccion de marcos y si tiene o no vidrio:
// function marcos(marcoElegido){
//     if(marcoElegido == 1){
//         return ("Marco de madera nogal")
//     }
//     else if (marcoElegido == 2){
//         return("Marco madera nogal, con vidrio")
//     }
//     else if (marcoElegido == 3){
//         return ("Marco de madera pino")
//     }
//     else if (marcoElegido == 4){
//         return("Marco madera pino, con vidrio")
//     }
//     else (
//         "sin marco"
//     )
//     }

// // variables de solicitud de datos para la eleccion de propiedades, llamando a la fn de cada una de las propiedades y retornando el valor  de los condicionales: 
// let tamañoElegido = tamaños (parseInt(prompt ("Elija el tamaño de impresion: 'A0' (0), 'A1' (1), 'A2' (2), 'A3' (3), 'A4' (4), ó, 'A5' (5)")));
// // let papelElegido = papeles (parseInt( prompt ("Seleccionar papel: 'BRILLO' (1), 'MATE' (2), o 'FINEART' (3)") ));
// let montajeElegido = montajes (parseInt ( prompt ("Seleccione el tipo de montaje: 'PASPARTOU' (1), 'FOAMBOARD' (2), o, 'FIBROFACIL' (3)") ) );   
// let marcoElegido = marcos (parseInt ( prompt ("Elija su marco: 'MARCO NOGAL' (1), con vidrio (2), 'MARCO PINO' (3), con vidrio (4), 'SIN MARCO' (5).") ) ) ;


// // para realizar la interaccion uso este tipo, uso click events, usando un select y las option para poder desplegar el menu de cada una de las opciones


// // cuadro terminado con todas sus propiedades, para luego pushear al carrito de compras: 
// const cuadroCreado = new CrearCuadro (tamañoElegido, papelElegido, montajeElegido, marcoElegido);
// console.log(cuadroCreado);
// carritoDeCompras.push(cuadroCreado);
// console.log



// let papelElegido = document.getElementById("#seleccionar-papel")
// papelElegido.addEventListener("onchange", mostrarPapelElegido)
// function papeles(papelElegido) {
//     if (papelElegido == querySelector('.papel__brillo')) {
//         console.log("Papel de impresion: 'BRILLO'");
//     }
//     else if (papelElegido == 2) {
//         return ("Papel de impresion: 'MATE'")
//     }
//     else if (papelElegido == 3) {
//         return ("Papel de impresion: 'FINEART'")
//     }
//     else {
//         return ("Papel de impresion: 'Autoadhesivo'")
//     }
// }



// let seleccionPapel = document.getElementById("papeles")
// function select() {
// console.log(selection.options[selection.selectedIndex].value);
// }
// let seleccionMontaje = selection[document.getElementById('montajes')];
// function select() {
//     console.log(selection.options[selection.selectedIndex].value);
//     }


// class para la creacion de cada cuadro, la cual despues se puseha al carrito de compras.

// class CrearCuadro {
//     constructor (tamaño, papel, montaje, marco){
//         this.tamaño = tamaño,
//         this.papel = papel,
//         this.montaje = montaje,
//         this.marco = marco
//     }
// }
    function tamañoSeleccionar(){
        let selectedValue = document.getElementById('seleccionTamaño').value;
    console.log (selectedValue)
        
    }
    function papelSeleccionar(){
        let selectedValue = document.getElementById ('seleccionPapel').value;
    console.log (selectedValue)
        

    }
    function montajeSeleccionar(){
        let selectedValue = document.getElementById('seleccionMontaje').value;
    console.log (selectedValue)
        
    }
    function marcoSeleccionar(){
        let selectedValue = document.getElementById ('seleccionMarco').value;
        console.log (selectedValue);
        if(selectedValue != "sin-marco"){
            console.log ("marco con vidrio");
        }
        else{
            console.log ("marco sin vidrio");
        }

    }





                        // CONSULTA

    // como hacer para que las selecciones se agreguen al class? porque con el return me lo devuelve vacio....:
    
        // let tamañoSeleccionado = tamañoSeleccionar();
    // let papelSeleccionado = papelSeleccionar();
    // let montajeSeleccionado = montajeSeleccionar();
    // let marcoSeleccionado = marcoSeleccionar();

    // new CrearCuadro (tamañoSeleccionado, papelSeleccionado, montajeSeleccionado, marcoSeleccionado);


    // /
    

                            // para la entrega de proyecto final 


    // seria mas conveniente crear un array de cada una de las propiedades? con los precios y particuliradedes de cada una de las opciones? y eso luego agregarlo al HTML con un "add" al innerHtml? 
    // la segunda forma seria la mas logica y simple de implementar, a la vez creando la funcion de agregar a un carrito, sumando productos y precios.






