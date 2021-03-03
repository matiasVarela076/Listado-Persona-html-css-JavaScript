const personas= [
    

];

function mostrarPersonas(){
console.log('Probando app.js');
    let texto= '';

   for(let persona of personas ){
    console.log(persona);  //Recorremos el arreglo para ver si esta ok
    texto += `<li>${persona.nombre} ${persona.apellido}</li>`;  //Asigno el nombre y apellido al acumulador
                                                                //Que se muestra en la lista
    } 
                                                                
    //Recuperamos el id html personas y le asignamos los la var texto

    document.getElementById('personas').innerHTML = texto;                                                             
}

function agregarPersona(){
    const formu = document.forms['formu'];  //Recuperamos los datos que recibimos en el formulario
    const nombre = formu['nombre'];
    const apellido = formu['apellido'];
    if(nombre.value != "" && apellido.value != ''){

        //Creamos un objeto de tipo persona y le asignamos los valores de la constantes
    
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona); //lo imprimimos en consola para verificar
    
        personas.push(persona); //Agregamos el nuevo objeto persona al arreglo persona para 
                                    //Mostrar la persona ingresada
    
       mostrarPersonas(); //Hacemos un callback de la funcion para que se refresque con los nuevos datos                           
    }else{
        console.log('No se ingreso ningun valor');
    }

}