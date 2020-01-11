class Snake {
    constructor(scene) {
        this.scene = scene; // va a contener todas las propiedades de la escena que se le pase
        this.body = [];
        this.head = undefined; 
        this.bodyLen = 3;
        this.dir = 'left';
        this.blockedDir = 'right';
        this.timmer = 0;

        // genera cuerpo

        for(let i = 0; i < this.bodyLen; i++){
            this.body.push(this.scene.physics.add.image(100 + i * 10, 100, 'body')
            .setOrigin(0) //
            ); //el physics le añade propiedades físicas a la imagen
        }

        this.head = this.body[0];

        // genera colisiones

        for(let i = 1; i < this.bodyLen; i++){
            this.scene.physics.add.collider(this.head, this.body[i], () => {
                this.collide();
            }); //choque de la cabeza con cualquier otra parte
        }
    }

    grow() {
        const obj = this.body[this.body.length-1];
        const newObj = this.scene.physics.add.image(obj.x, obj.y, 'body').setOrigin(0); // setOrigin(2) ;)
        this.body.push(newObj);
        this.scene.physics.add.collider(this.head, newObj, () =>  this.collide());
    }

    collide() {
        this.scene.scene.start('Gameover');
    }

    changeMov(dir) {
        if(this.blockedDir != dir) { // para que no puedas girar en la dirección opuesta si dar el giro completo
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
                let index = this.body.length - 1 - i;
                let bodyInAreaX =  this.body[index].x;
                let bodyInAreaY =  this.body[index].y;
                const stageWidth = this.scene.sys.game.config.width;
                const stageHeight = this.scene.sys.game.config.height;
                this.body[index].x = Phaser.Math.Wrap(bodyInAreaX, 0, stageWidth); // si se sale del x0, se retorna a x_máximo de nuestro canvas;
                this.body[index].y = Phaser.Math.Wrap(bodyInAreaY, 20, stageHeight); 
            }
    
            this.directionMov();
            this.timmer = time + 150;
        }
    }


    directionMov(){
        switch (this.dir) {
            case 'right':
                this.head.x += 10;
                this.blockedDir = 'left'; 
                break;
            case 'left':
                this.head.x -= 10;
                this.blockedDir = 'right';
                break;
            case 'up':
                this.head.y -= 10;
                this.blockedDir = 'down';
                break;
            case 'down':
                this.head.y += 10;
                this.blockedDir = 'up';
                break;
        }
    }
}

export default Snake;