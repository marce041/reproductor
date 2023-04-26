import './Input.css'

const Input = ({ ...props }) => {
  return (
    <input
      className='input-component'
      { ...props }
    />
  )
}

export default Input