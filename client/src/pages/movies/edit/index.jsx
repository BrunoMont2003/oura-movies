import { useParams } from 'react-router-dom'

function EditMovie() {
  const { id } = useParams()
  return <div>EditMovie {id}</div>
}

export default EditMovie
