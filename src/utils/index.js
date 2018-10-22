export const shuffleArray = array => {
  for (let i = array.length - 1; i >= 0; i--) {
    // 0 to 51
    // Random item from array of items
    let randIndex = Math.floor(Math.random() * (i + 1))
    let itemIndex = array[randIndex]
    // Replace randomly picked card with last card
    // Replace last card with randomly picked card
    array[randIndex] = array[i]
    array[i] = itemIndex
  }

  return array
}