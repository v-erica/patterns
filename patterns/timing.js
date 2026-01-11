/**
 * @param {string[]} playlist
 * @param {string} song
 * @returns {boolean} whether `song` is in `playlist`
 * @returns `false` if `playlist` is empty
 */
export function isSongInPlaylist(playlist, song) {
  for (const songInPlaylist of playlist) {
    if (songInPlaylist === song) {
      return true;
    }
  }
  return false;
}

/**
 * @param {number[]} numbers
 * @returns {boolean} whether all `numbers` are even
 * @returns `undefined` if `numbers` is empty
 */
export function isAllEven(numbers) {
  // TODO
  if (numbers.length < 1) return undefined;

  for (const number of numbers) {
    if (number % 2 !== 0) {
      // it's easier/faster to look for iteration that will cause it to fail instead of looping through every true instance
      return false;
    }
  }
  return true;
  // return true OUTSIDE of the loop so we don't interrupt / stop the loop early
}

/**
 * You're in charge of a group camping trip. You've packed supplies in a backpack,
 * and each item in the backpack has a category, such as "food", "equipment", or "clothes".
 * Each item in the "food" category is enough to feed one person.
 *
 * @param {{category: string}[]}} backpack
 * @param {number} people
 * @returns {boolean} whether there is enough food in the backpack to feed everyone
 */
export function haveEnoughFood(backpack, people) {
  // TODO
  let count = 0;
  // declare a variable 'count' outside of the loop so we don't reset it during every iteration
  for (const item of backpack) {
    // make sure to carefully review the instructions -- the object looks like { "category" : "food" }
    if (item.category === "food") {
      // item.category represents the VALUE of any object that has a "category" property. Here we're trying to count objects that have a "food" value
      count += 1;
    }
  }
  return count >= people;
  // return outside of the loop so the loop can finish running
}
