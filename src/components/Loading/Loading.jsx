import './Loading.css'

const Loading = () => {
  return (
    <div className='loading-component'>
      <h1 className='loading-title'>Cargando</h1>
      <div className='circles-comtainer'>
        <div className='circle'/>
        <div className='circle'/>
        <div className='circle'/>
      </div>
    </div>
  )
}

export default Loading