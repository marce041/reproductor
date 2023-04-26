import './TrackCard.css'
const TrackCard = ({ img, name, artistName, previewUrl, ...remainingProps }) => {
  return (
    <div 
      className="track-card-component"
      { ...remainingProps }
    >
      <img src={ img } alt={ name } />
      <h2>{ name }</h2>
      <p>{ artistName }</p>
      <audio src={ previewUrl } controls />
    </div>
  )
}

export default TrackCard