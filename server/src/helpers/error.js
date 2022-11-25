export const formatErrorMessage = (err) => {
  return err.replace(/"/g, '\'')
}
