import Piece from "types/Piece"
import Position from "types/Position"

import Pawn from "pieces/classique/Pawn"

import findDirectionalMoves from "./findDirectionalMoves"

type TestDirectionalMoves = (
  piece: Piece,
  direction: Position,
  setup: Piece[],
  expectation: Position[],
) => void

const testDirectionalMoves: TestDirectionalMoves = (piece, direction, setup = [], expectation = []) => {
  const result = findDirectionalMoves(piece, setup, direction)
  expect(result).toMatchObject(expectation)
}

test("checks if stops on teammate", () => {
  testDirectionalMoves(
    new Pawn(1, 0, "black"),
    { x: 0, y: 1 },
    [ new Pawn(1, 1, "black") ],
    [],
  )
})

test("checks if stops after enemy", () => {
  testDirectionalMoves(
    new Pawn(1, 0, "black"),
    { x: 0, y: 1 },
    [ new Pawn(1, 1, "white") ],
    [{ x: 1, y: 1 }],
  )
})

test("checks if goes to end", () => {
  testDirectionalMoves(
    new Pawn(5, 1, "black"),
    { x: -1, y: 2 },
    [],
    [{ x: 4, y: 3 }, { x: 3, y: 5 }, { x: 2, y: 7 }],
  )
})