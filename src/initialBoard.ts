import range from "utils/range"

import Pawn from "pieces/classique/Pawn"
import Rook from "pieces/classique/Rook"
import King from "pieces/classique/King"
import Knight from "pieces/classique/Knight"
import Bishop from "pieces/classique/Bishop"
import Queen from "pieces/classique/Queen"

const initialBoard = [
  new Rook(0, 0, "black"),
  new Knight(1, 0, "black"),
  new Bishop(2, 0, "black"),
  new Queen(3, 0, "black"),
  new King(4, 0, "black"),
  new Bishop(5, 0, "black"),
  new Knight(6, 0, "black"),
  new Rook(7, 0, "black"),
  new Rook(0, 7, "white"),
  new Knight(1, 7, "white"),
  new Bishop(2, 7, "white"),
  new Queen(3, 7, "white"),
  new King(4, 7, "white"),
  new Bishop(5, 7, "white"),
  new Knight(6, 7, "white"),
  new Rook(7, 7, "white"),
  ...range(8).map((i) => new Pawn(i, 1, "black")),
  ...range(8).map((i) => new Pawn(i, 6, "white")),
]

export default initialBoard