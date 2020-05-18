// POO Programacion Orientada Objetos


//  Objeto
var coche = {
    //  Propiedades del objeto
    marca : 'Toyota',
    modelo : 'C-HR',
    anyo : 2020,
    //  Metodos de un objetos son funciones dentro de objetos
    detalles : function(){
        //  this hace referencia a esto dentro de donde esta para llamar al value de cada key
        console.log(` ${this.marca}: ${this.modelo} \\ ${this.anyo} `)

    }
};
//  Llamar a una propiedad del objeto
coche.marca;

// llamar al metodo del objeto
coches.detalles();