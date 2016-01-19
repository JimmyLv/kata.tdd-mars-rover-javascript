export class MarsRover {
  constructor(x = 0, y = 0, orientation = "N") {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
    this._status = this.x + this.y + this.orientation;
  }

  execute(command) {
    if (command === "L") {
      this._status = "00W"
    } else if (command === "R") {
      this._status = "00E"
    }
  }

  status() {
    return this._status
  }
}

