class UI extends Phaser.Scene {

    constructor() {
        super('UI'); 
    }

    preload() {
        console.log("Preload UI");
    }

    create(){
        let stageWidth = this.sys.game.config.width;
        this.add.image(0, 0, 'board').setOrigin(0);
        this.add.dynamicBitmapText(10, 7, 'pixel_font', 'PUNTOS', 8);
        this.points = this.add.dynamicBitmapText(stageWidth -60, 7, 'pixel_font', Phaser.Utils.String.Pad(0, 6, 0, 1), 8);  // Para aumentar de derecha a izquieda los dígitos: Phaser.Utils.String.Pad va a rellenar los espacios con más información. Texto / Cantidad / Con qué rellenamos / Dirección
    }

    addPoint() {
        this.points.setText(
            Phaser.Utils.String.Pad(+this.points.text + 10, 6, 0, 1)
        );
    }
}

export default UI; 