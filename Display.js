class Display{

    constructor(displayValorAnterior, displayValorActual){
        this.displayValorAnterior= displayValorAnterior;
        this.displayValorActual= displayValorActual;
        this.calculadora= new Calculadora();
        this.tipoOperacion= undefined; // Guarda el tipo de operacion que utiliza el usuario
        this.valorActual= ""; // este son los valores ingresdos al tocar el boton
        this.valorAnterior= "";
        // mapeo de simbolos de operacion a mostrar en el display
        this.signos= {
            'sumar': '+',
            'restar': '-',
            'multiplicar': 'x',
            'dividir': '/'
        }
    }

    borrar(){
        this.valorActual= this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorActual= "";
        this.valorAnterior= "";
        this.tipoOperacion= undefined;
        this.imprimirValores();
    }

    computar(tipo){
        this.tipoOperacion !== "igual" && this.calcular(); // si distinto del igual entonces calcular
        this.tipoOperacion = tipo;
        // seteamos el valor anterior por el actual, o en caso que no haya queda el valor anterior en display
        this.valorAnterior= this.valorActual || this.valorAnterior; 
        this.valorActual= ""; // una vez seteado, dejamos vacio el valor actual para una proxima operacióSn
        this.imprimirValores();
    }

    agregarNumero(numero){
        if(numero === "." && this.valorActual.includes(".")) return // si queremos ingresar un punto y ya hay uno no hara nada
        this.valorActual= this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayValorActual.textContent= this.valorActual;
        this.displayValorAnterior.textContent= `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular(){
        const valorAnterior= parseFloat(this.valorAnterior);// pasa a valor numerico los valores
        const valorActual= parseFloat(this.valorActual);    // que anteriormente eran strings
        
        if( isNaN(valorActual) || isNaN(valorAnterior) ) return // si los valores no son numeros no hara nada
        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual);
    }

}