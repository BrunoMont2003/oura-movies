import { createContext, useState, useContext } from 'react'

export const ImageContext = createContext()

export const ImageProvider = ({ children }) => {
  const [type, setType] = useState('url')
  const [url, setUrl] = useState('')

  return (
    <ImageContext.Provider
      value={{
        type,
        setType,
        url,
        setUrl
      }}
    >
      {children}
    </ImageContext.Provider>
  )
}

export const useImageContext = () => useContext(ImageContext)
