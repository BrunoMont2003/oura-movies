const base = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus aperiam dolore. Illum perspiciatis excepturi qui consequuntur, nulla distinctio eveniet animi, voluptatum magnam modi, officia fugit temporibus quos quidem voluptatem?'

const lorem = (length = 50) => {
  const numberOfWords = Math.floor(length / 5)
  const words = base.split(' ')
  const result = []
  for (let i = 0; i < numberOfWords; i++) {
    result.push(words[Math.floor(Math.random() * words.length)])
  }
  return result.join(' ')
}

export default lorem
