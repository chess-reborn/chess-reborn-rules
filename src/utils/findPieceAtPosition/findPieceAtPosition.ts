import Piece from "types/Piece"
import Position from "types/Position"

const findPieceAtPosition = (pieces: Piece[], position: Position) => (
  pieces.find((piece) => piece.y === position.y && piece.x === position.x)
)

export default findPieceAtPosition