export const getSomeRandomElements = (array, count) => {
  const result = []
  for (let i = 0; i < count; i++) {
    const element = array[Math.floor(Math.random() * array.length)]
    !result.includes(element) && result.push(element)
  }
  return result
}
