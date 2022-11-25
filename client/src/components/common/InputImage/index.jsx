import { FilePlusIcon, LinkBreak2Icon } from '@radix-ui/react-icons'
import { useEffect } from 'react'
import { useImageContext } from '../../../contexts/ImageContext'

function InputImage ({ field, form, ...props }) {
  const { type, setType, setUrl, url } = useImageContext()
  useEffect(() => {
    setUrl(field.value)
  }, [])

  const handleToggle = () => {
    setType(type === 'url' ? 'file' : 'url')
  }

  const handleChange = (e) => {
    setUrl(e.target.value)
    field.onChange(e)
  }

  const handleChangeImage = (e) => {
    const file = e.target.files[0]
    // eslint-disable-next-line no-undef
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      console.log(reader.result)
      setUrl(reader.result)
      field.onChange({
        target: {
          name: field.name,
          value: reader.result
        }
      })
    }
  }

  return (
    <div className='flex gap-2'>
      {type === 'url'
        ? (
          <input
            {...field} onChange={handleChange}
            {...props} value={url} className={`${props.className} w-full`}
          />
          )
        : (
          <input
          // {...field}
            {...props}
            className={`${props.className} w-full`}
            type='file'
            onChange={handleChangeImage}
          />
          )}
      <button
        type='button'
        onClick={handleToggle}
        className='bg-neutral-800 h-full p-5 rounded'
      >
        {type === 'url'
          ? (
            <FilePlusIcon className='scale-[120%]' />
            )
          : (
            <LinkBreak2Icon />
            )}
      </button>
    </div>
  )
}

export default InputImage
