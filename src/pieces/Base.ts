import Team from "types/Team"

class Base {
  public x
  public y
  public team

  constructor(x: number, y: number, team: Team) {
    this.x = x
    this.y = y
    this.team = team
  }
}

export default Base