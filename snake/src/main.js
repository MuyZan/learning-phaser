import Bootloader from './bootloader.js';
import Play from './scenes/play.js';
import UI from './scenes/UI.js';
import Gameover from './scenes/gameover.js';
import Menu from './scenes/menu.js';


const config = {
    title: 'Snake',
    width: 320,
    height: 180,
    type: Phaser.AUTO, // Se inicia por defecto en WebGL y sino está disponible, en Canvas
    parent: 'container', // la raíz declarada en el index.html
    backgroundColor: '#f9ca24',
    pixelArt: true,
    physics: {
        default: 'arcade',
    }, //tiene que estar debajo de pixelArt;
    scene: [Bootloader, Play, UI, Gameover, Menu],
};

new Phaser.Game(config);