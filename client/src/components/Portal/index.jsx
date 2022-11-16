import './style.css'
import Button from '../common/Button'
function Portal () {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='max-w-[700px] mt-32 md:mt-0 flex flex-col gap-5'>
        <h1 className='text-3xl mx-5 sm:text-5xl lg:text-6xl  text-white text-center main-title '>
          Manage your movies and vote for your favorites
        </h1>
        <div className='flex justify-center'>
          <Button isLink to='/signup' className='md:text-3xl font-light px-12 py-2 bg-violet-500 rounded-lg bg-opacity-40 text-white border border-violet-400 hover:translate-y-2 duration-200 transition-all ease-in-out'>
            Begin
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Portal
