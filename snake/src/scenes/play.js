import Snake from '../game_objects/Snake.js'
import Food from '../game_objects/Food.js';

class Play extends Phaser.Scene {

    constructor() {
        super('Play');
    }

    preload() {
        this.snake = new Snake(this); //le pasamos esta escena, con sus propiedades
        this.food = new Food(this);
    }

    create() {

        this.scene.launch('UI'); // ejecuta una llamada a una escena para que se reproduzca a la vez.
        const sceneUI = this.scene.get('UI'); // referencia de la escena UI


        this.input.keyboard.on('keydown_RIGHT', () => {
            this.snake.changeMov('right');
        });

        this.input.keyboard.on('keydown_LEFT', () => {
            this.snake.changeMov('left');
        });

        this.input.keyboard.on('keydown_UP', () => {
            this.snake.changeMov('up');
        });

        this.input.keyboard.on('keydown_DOWN', () => {
            this.snake.changeMov('down');
        });

        /*
        Colision de cabeza de serpiente con la comida.
        Como es un grupo (food), cada vez que se genere una nueva
        comida se va meter en el grupo y por lo tanto en la colision.
        */
        this.physics.add.collider(this.snake.body[0], this.food.food, () => {
            this.food.createFood();
            this.snake.grow();
            sceneUI.addPoint();
        });
    }

    update(time) {
        // time tiempo en milisegundos desde que se ejecutó la aplicación
        this.snake.update(time);
    }
}

export default Play; 