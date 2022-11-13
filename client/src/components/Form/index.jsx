import { Formik, Field, Form as Formk } from 'formik'

function Form ({ initialValues = {}, onSubmit, inputs = [] }) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Formk className='grid md:grid-cols-2 gap-5'>
        {inputs.map((input, index) => (
          <div key={index} className='flex flex-col gap-2'>
            <label htmlFor={input.name} key={index}>
              {input.label}
            </label>

            <Field
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              className='bg-transparent border border-white rounded p-5 h-16 border-opacity-50 focus:outline-none focus:border-opacity-100'
              required={input.required}
            />
          </div>
        ))}
        <button
          type='submit'
          className='col-span-full bg-neutral-50 opacity-80 hover:opacity-100 transition-all ease-in-out duration-300 focus:opacity-100 text-black rounded-md p-5'
        >
          Submit
        </button>
      </Formk>
    </Formik>
  )
}

export default Form
