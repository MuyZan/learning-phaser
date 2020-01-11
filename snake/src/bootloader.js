/*  Escena encargada de cargar nuestros assets */

class Bootloader extends Phaser.Scene {

    constructor() {
        super('Bootloader'); // llamamos al constructor de Scene y le pasamos el nombre
    }

    // aqui cargaremos los assets
    preload() {

        this.load.path = './assets/'; //relativo al HTML file

        // carga asíncrona de la imágenes
        this.load.image('body', 'body.png');
        this.load.image('food', 'food.png');
        this.load.image('board', 'tablero.png');

        // carga del json de la font:
        this.load.json('fontJSON', 'font/font.json');
        this.load.image('font', 'font/font.png');

        // evento tras la carga asíncrona -- equivalente a un método create()
        this.load.on('complete', () => {

            const fontJSON = this.cache.json.get('fontJSON');
            this.cache.bitmapFont.add('pixel_font', Phaser.GameObjects.RetroFont.Parse(this, fontJSON));

            this.scene.start('Menu'); //el nombre que le hemos pasado al contructor de Scenes en play.js;
        });
    }
}

export default Bootloader; // exportamos como módulo