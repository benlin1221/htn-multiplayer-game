class Tile {
    constructor(dupeId, tileId, set, owner) {
        this.dupeId = dupeId;
        this.tileId = tileId;
        this.set = set;
        this.owner = owner;
    }

    get dupeId(){
        return this.dupeId;
    }

    get tileId() {
        return this.tileId;
    }

    get set() {
        return this.set;
    }

    //add more fields and methods as required
}

class Numbered extends Tile {
    constructor(dupeId, tileId, set, owner, number) {
        super(dupeId, tileId, id, set, owner);
        this.number = number;
    }

    get number() {
        return this.number;
    }
}