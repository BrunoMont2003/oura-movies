import { useEffect } from 'react'
import { useImageContext } from '../../contexts/ImageContext'

function DynamicImage ({ src, alt = 'some image', className = '' }) {
  const { url } = useImageContext()
  useEffect(() => {

  }, [url])

  return (
    <img
      src={url ?? src}
      alt={alt}
      className={className + 'max-w-[200px] max-h-[300px]'}
    />
  )
}

export default DynamicImage
