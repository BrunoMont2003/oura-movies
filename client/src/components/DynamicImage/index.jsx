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
      className={className + 'w-[300px] h-[450px] object-cover'}
    />
  )
}

export default DynamicImage
