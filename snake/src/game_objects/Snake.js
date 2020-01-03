class Snake {
    constructor(scene) {
        this.scene = scene; // va a contener todas las propiedades de la escena que se le pase
        this.body = []; 
        this.dir = 'left';
        this.timmer = 0;
        this.oldDir = 'right';
        this.bodyLen = 3;

        // genera cuerpo

        for(let i = 0; i < this.bodyLen; i++){
            this.body.push(this.scene.physics.add.image(100 + i * 10, 100, 'body')
            .setOrigin(0) //
            ); //el physics le añade propiedades físicas a la imagen
        }

        // genera colisiones

        for(let i = 1; i < this.bodyLen; i++){
            this.scene.physics.add.collider(this.body[0], this.body[i], () => {
                this.collide();
            }); //choque de la cabeza con cualquier otra parte
        }
    }

    grow() {
        const obj = this.body[this.body.length-1];
        const newObj = this.scene.physics.add.image(obj.x, obj.y, 'body').setOrigin(0);
        this.body.push(newObj);
        this.scene.physics.add.collider(this.body[0], newObj, () =>  this.collide());
    }

    collide() {
        this.scene.scene.start('Gameover');
    }

    changeMov(dir) {
        if(this.oldDir != dir) { // para que no puedas girar en la dirección opuesta si dar el giro completo
            this.dir = dir;
        }
    }

    /*recibimos el time de la escena donde se invoque Snake, y como ese 
    método update() va demasiado rápido, adaptamos el update de nuestra clase Snake
    */
    update(time) {

        if (time > this.timmer) {

            //haciendo que el cuerpo siga a la cabeza
            for(let i = this.body.length -1; i > 0; i--){
                this.body[i].x = this.body[i - 1].x;
                this.body[i].y = this.body[i - 1].y;

                // método que limita el area del elemento dentro del container, para que no se salga
                let bodyInAreaX =  this.body[this.body.length - 1 - i].x;
                let bodyInAreaY =  this.body[this.body.length - 1 - i].y;
                let projectAreaX = this.scene.sys.game.config.width;
                let projectAreaY = this.scene.sys.game.config.height;
                this.body[this.body.length - 1 - i].x = Phaser.Math.Wrap(bodyInAreaX, 0, projectAreaX); // si se sale del x0, se retorna a x_máximo de nuestro canvas;
                this.body[this.body.length - 1 - i].y = Phaser.Math.Wrap(bodyInAreaY, 20, projectAreaY); 
            }

            switch (this.dir) {
                case 'right':
                    this.body[0].x += 10;
                    this.oldDir = 'left'; 
                    break;
                case 'left':
                    this.body[0].x -= 10;
                    this.oldDir = 'right';
                    break;
                case 'up':
                    this.body[0].y -= 10;
                    this.oldDir = 'down';
                    break;
                case 'down':
                    this.body[0].y += 10;
                    this.oldDir = 'up';
                    break;
            }
            this.timmer = time + 150;
        }
    }
}

export default Snake;