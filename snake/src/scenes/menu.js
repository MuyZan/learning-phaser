class Menu extends Phaser.Scene {

    constructor() {
        super('Menu'); 
    }

    preload() {
        console.log("Preload Menu");
    }

    create() {
        const stageWidth = this.sys.game.config.width;
        const stageHeight = this.sys.game.config.height;

        const logo = this.add.image(stageWidth / 2, stageHeight / 2 - 50, 'food');
        logo.setScale(6);

        const logoText =  this.add.dynamicBitmapText(stageWidth / 2, stageHeight / 2,
             'pixel_font', 'SNAKE', 18); 
        logoText.setOrigin(0.5);

        const pressButton = this.add.dynamicBitmapText(stageWidth / 2, stageHeight - 40,
            'pixel_font', 'PRESS ANY BUTTON', 8);
        pressButton.setOrigin(0.5);

        this.tweens.add({
            targets: pressButton,
            alpha: 0,
            ease: (x) => x < 0.5 ? 0 : 1,
            duration: 500,
            yoyo: true,
            repeat: -1 
        });

        this.input.keyboard.on('keydown_RIGHT', () => {
            this.scene.start('Play');
        });

        this.input.keyboard.on('keydown_LEFT', () => {
            this.scene.start('Play');
        });

        this.input.keyboard.on('keydown_UP', () => {
            this.scene.start('Play');
        });

        this.input.keyboard.on('keydown_DOWN', () => {
            this.scene.start('Play');
        });

        this.input.keyboard.on('keydown_ENTER', () => {
            this.scene.start('Play');
        });

        this.input.on('pointerdown', () => {
            this.scene.start('Play');
        });
    }
}

export default Menu; 