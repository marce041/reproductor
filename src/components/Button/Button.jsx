import './Button.css'

const Button = ({ children, ...remaingProps }) => {
  return (
    <button
      className='button-component'
      { ...remaingProps }
    >
      { children }
    </button>
  )
}

export default Button