import fs from 'fs'
import path from 'path'
export const saveBase64File = (base64, fileName) => {
  fileName = fileName.replace(/[^a-zA-Z0-9.]/g, '-')
  const data = base64.replace(/^data:image\/\w+;base64,/, '')
  const buffer = Buffer.from(data, 'base64')
  const filePath = path.join(__dirname, `../../tmp/${fileName}`)
  fs.writeFileSync(filePath, buffer)
  return filePath
}

export const deleteFile = (filePath) => {
  fs.unlinkSync(filePath)
}
