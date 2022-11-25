import { Types } from 'mongoose'

const IsValidID = (value, helpers) => {
  if (!Types.ObjectId.isValid(value)) {
    return helpers.message('Invalid id')
  }
  return value
}

export default IsValidID
