import './index.css'

const WinOrLoseCard = props => {
  const {score, onPlayAgain, isWon} = props
  const imgUrl = isWon ? (
    <img
      src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
      alt="win or lose"
    />
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
      alt="win or lose"
    />
  )

  return (
    <div className="win-lose-card">
      <div className="left-content">
        <h1 className="heading">{isWon ? 'You Won' : 'You Lose'}</h1>

        <div className="best-score">
          <p>{isWon ? 'Best Score' : 'Score'}</p>
          <p className="span">{score}/12</p>
        </div>

        <button type="button" onClick={onPlayAgain} className="play-again">
          Play Again
        </button>
      </div>
      {imgUrl}
    </div>
  )
}

export default WinOrLoseCard
