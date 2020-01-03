/*  Escena encargada de cargar nuestros assets */

class Bootloader extends Phaser.Scene {

    constructor() {
        super('Bootloader'); // llamamos al constructor de Scene y le pasamos el nombre
    }

    // aqui cargaremos los assets
    preload() {
        console.log("Preload Bootloader");
    
        // carga asíncrona
        this.load.image('body', './assets/body.png'); //relativo al HTML file
        this.load.image('food', './assets/food.png');
        this.load.image('board', './assets/tablero.png');
        
        // evento tras la carga asíncrona -- equivalente a un método create()
        this.load.on('complete', () => {
            console.log("cuando se carga");
           this.scene.start('Play'); //el nombre que le hemos pasado al contructor de Scenes en play.js;
        });
    }
}

export default Bootloader; // exportamos como módulo