import { getAsset } from './assets';
import { getCurrentState } from './state';

const Constants = require('../shared/constants');
// insert useful constants for rendering here

const canvas = document.getElementById('game-canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function render() {
    const { me, others } = getCurrentState();
    if (!me) {
        return; //idk what this is for
    }
    
    renderPlayerTiles(me, me)
    others.forEach(renderPlayerTiles.bind(null, me));
}



//function renderPlayerTiles(me, tile) {
//    const { x, y } = tile;
//
  //  context.drawImage(
    //    getAsset()
//    )
//}

//just to get a running build