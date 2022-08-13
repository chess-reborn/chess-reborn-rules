import range from "./range"

test("check if 0 length range returns empty array", () => {
  expect(range(0)).toMatchObject([])
})

test("check if range returns correct array", () => {
  expect(range(8)).toMatchObject([1, 2, 3, 4, 5, 6, 7, 8])
})