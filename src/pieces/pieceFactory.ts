import Piece from "types/Piece"
import Position from "types/Position"
import Team from "types/Team"

type GetImage = {
  black: Piece["image"]
  white: Piece["image"]
}

type GetPossibleMoves = (
  currentPiece: Piece,
  pieces: Piece[],
) => ReturnType<Piece["getPossibleMoves"]>

const pieceFactory = (teamToImageMap: GetImage, getPossibleMoves: GetPossibleMoves) => (
  class PieceImplementation implements Piece {
    public x
    public y
    public team
    public image = ""
    public getPossibleMoves

    constructor(x: Position["x"], y: Position["y"], team: Team) {
      this.x = x
      this.y = y
      this.team = team
      this.image = teamToImageMap[team]
      this.getPossibleMoves = (pieces: Piece[]) => (
        getPossibleMoves(this, pieces)
      )
    }
  }
)

export default pieceFactory