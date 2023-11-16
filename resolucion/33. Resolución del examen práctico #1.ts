(()=>{

  // Uso de Let y Const
  // var nombre = 'Ricardo Tapia';
  // var edad = 23;
  let nombre = 'Enver Flores';
  let edad = 36;
  console.log( nombre );
  console.log( edad );
  const MES_DE_CUMPLE = 'ENERO'
  const DIA_DE_CUMPLE = '3'
  console.log( "Enver cumple años en el mes de " + MES_DE_CUMPLE );
  console.log( DIA_DE_CUMPLE );
  // var PERSONAJE = {
  //   nombre: nombre,
  //   edad: edad
  // };
  let PERSONAJE = {
    nombre: 'Danilo',
    edad: 37
  };
  console.log( PERSONAJE.nombre);
  console.log( PERSONAJE.edad);
  const DIAS = {
    nombre: 'Lunes',
    edad: 1
  };
  console.log( DIAS.nombre);
  console.log( DIAS.edad);
  // Cree una interfaz que sirva para validar el siguiente objeto
  // var batman = {
  //   nombre: 'Bruno Díaz',
  //   artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  // }
  interface batmanInterface {
    nombre: string;
    artesMarciales: string[];
  }
  let batman: batmanInterface = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  }
  console.log(batman.nombre);
  console.log(batman.artesMarciales);
  
  // Convertir esta funcion a una funcion de flecha
  function resultadoDoble( a: number, b: number ){
    return (a + b) * 2
  }
  const resultadoDobleF = ( a: number, b: number ) => (a + b) * 2;
  console.log("Total: " + resultadoDobleF( 3 , 3 ));
  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
function getAvenger( 
  nombre: string, 
  poder?: string, 
  arma  : string = 'arco'   ){
    var mensaje;
    if( poder ){
      console.log( `${nombre} tiene el poder: ${poder} y un arma: ${arma}`);
      //mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
    }else{
      console.log( `${nombre} tiene un ${arma}`); 
      //mensaje = nombre + ' tiene un ' + poder
    }
  };
  // getAvenger('Merida', 'agilidad'); //Merida tiene el poder: agilidad y un arma: arco
     getAvenger('Merida', ); //getAvenger('Merida', 'agilidad');

  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.
  class Rectangulo {
    // base: number;
    // altura: number; 
    // constructor ( base: number, altura: number ) {
    //   this.base = base;
    //   this.altura = altura;
    // }
    // calcularArea() {
    //   return this.base * this.altura;
    // }
    constructor ( public base: number,
                  public altura: number ) {}
                  calcularArea = () => this.base * this.altura;
  }
  let obj: Rectangulo = new Rectangulo(5,2);
  let base = obj.calcularArea();
  console.log(`Calcular base: ${base}`)
})();