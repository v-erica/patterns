/**
 * @param {number} rows
 * @param {number} cols
 * @returns {string[][]} an array containing `rows` arrays of `cols` elements each.
 * Each element is the string "-".
 * @returns `null` if either argument is not a number
 * @returns `[]` if either argument is 0 or negative
 */
export function makeBoard(rows, cols) {
  if (typeof rows !== "number" || typeof cols !== "number") return null;
  if (rows <= 0 || cols <= 0) return [];

  const board = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push("-");
    }
    board.push(row);
  }
  return board;
}

/**
 * A 'triangle' is 2D array where each inner array has one more element than the previous.
 *
 * For example, this is a 2x2 triangle:
 * [
 *   ["-"],
 *   ["-", "-"]
 * ]
 *
 * @param {*} size - the number of rows in the triangle
 * @returns {string[][]} a triangle with `side` rows
 * @returns `null` if `size` is not a number
 * @returns `[]` if `size` is 0 or negative
 */
export function makeTriangle(size) {
  // TODO
  if (typeof size !== "number") return null;
  // learned shorthand for if to omit {}
  if (size <= 0) return [];

  const triangleArr = [];
  // creates the triangle array

  for (let i = 1; i <= size; i++) {
    // start loop at 1 (per instructions) and go up by 1 until we get to input 'size'
    const sideRows = [];
    // creates each inner array with the "-"s

    for (let j = 0; j < i; j++) {
      sideRows.push("-");
      // .push() is a method that pops items into the end of an array
      // this is essentially pushing a "-" for 0 through (size - 1)
    }

    triangleArr.push(sideRows);
    // only push the row array after it's finished looping to add "-"
  }

  return triangleArr;
}

/**
 * @param {string[]} words
 * @param {string} letter - a single character
 * @returns {number}  the number of times `letter` appears in all the words
 * @returns `0` if `letter is not a string
 */
export function countLetter(words, letter) {
  // TODO

  if (typeof letter !== "string") return 0;

  let count = 0;
  // declare variable outside of the loop so we're not resetting it each iteration

  for (const word of words) {
    // 'word' variable is being declared for every item in 'words' array, no need to do it again or it'll reset the variable
    for (const char of word) {
      if (char === letter) {
        // might as well just compare each character 'char' to the input 'letter'
        count += 1;
      }
    }
  }
  return count;
  // return final value outside of the loop so we don't interrupt loop
}
