export const getSomeRandomElements = (array, count) => {
  const result = []
  for (let i = 0; i < count; i++) {
    const element = array[Math.floor(Math.random() * array.length)]
    // if the element is near the end of the result array, don't add it
    if (
      result.includes(element) &&
      result.indexOf(element) > result.length - 3
    ) {
      continue
    }
    result.push(element)
  }
  return result
}
