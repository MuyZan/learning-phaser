class Food {
    constructor(scene){
        this.scene = scene;

        /* los grupos son contenedores de objetos
        que nos permite asignar una colisión al grupo sin tener que generar una colisión
        por cada elemento de comida nuevo, sustituyendo a 
        this.scene.add.image(20, 20, 'food'); 

         */

        this.food = this.scene.physics.add.group({
            key: 'food',
            setXY: {
                x: 30,
                y: 30
            }   
        });

        //cambiamos el anchor de nuestro objeto generado en el grupo y su profundida
        this.food.getChildren()[0].setOrigin(0).setDepth(-1);
    }

    createFood() {
        let projectAreaX = this.scene.sys.game.config.width;
        let projectAreaY = this.scene.sys.game.config.height;
        let x = Phaser.Math.Between(30, projectAreaX - 30);
        let y = Phaser.Math.Between(30, projectAreaY - 30);

        //redondeamos estos números para que nos encaje en nuestro sistema de rejilla y no se descuadre el anchor respecto a Snake
        x = Phaser.Math.Snap.To(x, 10);
        y = Phaser.Math.Snap.To(y, 10);

        //destruimos previo y creamos nuevo
        this.food.getChildren()[0].destroy();
        this.food.create(x, y, 'food');
        this.food.getChildren()[0].setOrigin(0).setDepth(-1);
    }
}

export default Food;