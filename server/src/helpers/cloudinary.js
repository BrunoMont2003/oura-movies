export const getIdFromUrl = (url) => {
  const chain = url.split('/')
  const partialId = chain[chain.length - 2] + '/' + chain[chain.length - 1] // folder/1.png
  const id = partialId.split('.').shift() // folder/1
  return id
}
