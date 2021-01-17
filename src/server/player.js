const Tile = require('./tile');
const Constants = require('../shared/constants');

class Player {
    constructor(id, username) {
        this.id = id;
        this.username = username;
        this.order = 0;
        this.tiles = [];
    }

    get order() {
        return this.order;
    }

    set order(newOrder) {
        this.order = newOrder;
    }

    recieveTile(tile) {
        this.tiles.push(tile);
        //sort the tiles somehow
    }

    discardTile(id) {
        this.tiles = this.tiles.filter(function(id){
            return tile.id != id;
        });
    }

    serializeForUpdate() {
        return {
            id: this.id,
            username: this.username,
            tiles: this.tiles
        }
    }

    //maybe put check for win method here
}