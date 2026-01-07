/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  // TODO
  if (typeof n !== "number") return NaN;
  if (n < 0) return undefined;

  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  // TODO
  if (typeof n !== "number") return null;

  const arrN = [];
  for (let i = 1; i <= n; i++) {
    arrN.push(i);
  }
  return arrN;
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  // TODO
  const longestString = strings.reduce((longStr, current) => {
    if (current.length > longStr.length) {
      return current;
    } else {
      return longStr;
    }
  }, strings[0]);

  return longestString;
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  // TODO
  let present = 0;

  for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === true) {
      present += 1;
    }
  }
  return present;
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  // TODO
  if (typeof dna !== "string") return null;
  let complDna = [];

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      complDna.push("T");
      continue;
    }
    if (dna[i] === "T") {
      complDna.push("A");
      continue;
    }
    if (dna[i] === "C") {
      complDna.push("G");
      continue;
    }
    if (dna[i] === "G") {
      complDna.push("C");
      continue;
    }
  }
  return complDna.join("");
}
