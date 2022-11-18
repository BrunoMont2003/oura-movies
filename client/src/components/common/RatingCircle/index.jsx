import './style.css'
function RatingCircle ({ rate = 3 }) {
  const colors = {
    good: '#61f09d',
    meh: '#f1c40f',
    bad: '#e74c3c'
  }

  const ratingClass = rate >= 7 ? 'good' : rate >= 5 ? 'average' : 'bad'
  const ratingColor = colors[ratingClass]

  const gradient = `conic-gradient(${ratingColor} ${rate * 10}%, transparent ${
    rate * 10
  }%)`
  return (
    <div className={`rating ${ratingClass}`} style={{ background: gradient }}>
      <span className='absolute z-20'>{rate}</span>
    </div>
  )
}

export default RatingCircle
