const Constants = require('../shared/constants');
const Player = require('./player');

// new Game(); isnt detected as a constructor for some reason?
// maybe it's because it was never used in this file
class Game {
  constructor() {
    this.sockets = {};
    this.players = {};
    this.tiles = [];
  }

  addPlayer(socket, username) {
    this.sockets[socket.id] = socket;

    this.players[socket.id] = new Player(socket.id, username);
  }

  removePlayer(socket) {
    delete this.sockets[socket.id];
    delete this.players[socket.id];
  }

  handleInput(socket, dir) {
    if (this.players[socket.id]) {
      this.players[socket.id].setDirection(dir);
    }
  }

  draw() {
    // get a tile from the deck, present it to the player
    // or put it directly in their hand to make it less complicated?
    // call update
    // await player response
    // discard tile from player's hand
    // call update
    // ???
  }
  

  // what is controlling the draw calls and game updates

  update() {

    // Update each bullet
    // modify this to update each tile
    const bulletsToRemove = [];
    this.bullets.forEach(bullet => {
      if (bullet.update(dt)) {
        // Destroy this bullet
        bulletsToRemove.push(bullet);
      }
    });
    this.bullets = this.bullets.filter(
      bullet => !bulletsToRemove.includes(bullet),
    );

    // Check if any players are dead
    // change this to check if any player wins
    Object.keys(this.sockets).forEach(playerID => {
      const socket = this.sockets[playerID];
      const player = this.players[playerID];
      if (player.hp <= 0) {
        socket.emit(Constants.MSG_TYPES.GAME_OVER);
        this.removePlayer(socket);
      }
    });

    // Send a game update to each player every other time
    //dont know what to change this to or if we even need it
    if (this.shouldSendUpdate) {
      const leaderboard = this.getLeaderboard();
      Object.keys(this.sockets).forEach(playerID => {
        const socket = this.sockets[playerID];
        const player = this.players[playerID];
        socket.emit(
          Constants.MSG_TYPES.GAME_UPDATE,
          this.createUpdate(player),
        );
      });
      this.shouldSendUpdate = false;
    } else {
      this.shouldSendUpdate = true;
    }
  }

  
  createUpdate(player) {

    return {
      me: player.serializeForUpdate(),
      others: this.players.filter(x => x.id != player.id).map(p => p.serializeForUpdate()),
    };
  }
}

module.exports = Game;