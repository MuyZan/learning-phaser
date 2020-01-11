class Gameover extends Phaser.Scene {

    constructor() {
        super('Gameover'); 
    }

    preload() {
        console.log("Preload Gameover");
    }

    create() {
        this.scene.stop('UI');
        const stageWidth = this.sys.game.config.width;
        const stageHeight = this.sys.game.config.height;
        let gameOverText =  this.add.dynamicBitmapText(stageWidth / 2, stageHeight / 2 - 30, 'pixel_font', 'GAME OVER', 20);
        gameOverText.setOrigin(0.5);

        // eventos de salida de la escena

        this.event = setTimeout(() => {
            this.exitScene();
        }, 5000);

        this.input.keyboard.on('keydown_ENTER', () => {
            this.exitScene();
        });

        this.input.on('pointerdown', () => {
            this.exitScene();
        });
    }

    exitScene() {
        clearTimeout(this.event);
        this.scene.start('Menu');
    }
}

export default Gameover; 