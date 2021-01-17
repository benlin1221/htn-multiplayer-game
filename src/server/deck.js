const Tile = require('./tile');

class Deck {
    constructor() {
        this.tiles = []
    }

    reload() {
        //initialize this.tiles using a file or hardcoded (lol)
        for (let i = this.tiles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.tiles[i], this.tiles[j]] = [this.tiles[j], this.tiles[i]];
        }
        // this randomizes the array
    }
}