
const Btn = ({ children, type }) => {
  return (
    <button
      type={type}
      className='focus:ring-2 focus:ring-offset-2 focus:ring-blue-700  font-semibold leading-none text-white focus:outline-none bg-blue-600 border rounded hover:bg-blue-500 py-3 w-full text-md'
    >
      {children}
    </button>
  )
}

export default Btn