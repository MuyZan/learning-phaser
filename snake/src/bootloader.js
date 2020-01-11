/*  Escena encargada de cargar nuestros assets */

class Bootloader extends Phaser.Scene {

    constructor() {
        super('Bootloader'); // llamamos al constructor de Scene y le pasamos el nombre
    }

    // aqui cargaremos los assets
    preload() {

        this.load.path = './assets/'; //relativo al HTML file
    
        // carga asíncrona
        this.load.image('body', 'body.png'); 
        this.load.image('food', 'food.png');
        this.load.image('board', 'tablero.png');
        
        // evento tras la carga asíncrona -- equivalente a un método create()
        this.load.on('complete', () => {
           this.scene.start('Play'); //el nombre que le hemos pasado al contructor de Scenes en play.js;
        });
    }
}

export default Bootloader; // exportamos como módulo