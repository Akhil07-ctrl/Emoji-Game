import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import NavBar from '../NavBar'
import './index.css'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      topscore: 0,
      clickedEmojis: [],
      shuffledEmojisList: [...props.emojisList],
      isGameOver: false,
      isWon: false,
    }
  }

  shuffledEmojisList = () => {
    this.setState(preState => ({
      shuffledEmojisList: [...preState.shuffledEmojisList].sort(
        () => Math.random() - 0.5,
      ),
    }))
  }

  emojiClick = id => {
    const {clickedEmojis, score, topscore} = this.state
    const {emojisList} = this.props

    if (clickedEmojis.includes(id)) {
      this.setState({
        isGameOver: true,
        isWon: false,
        topscore: Math.max(score, topscore),
      })
    } else {
      const newScore = score + 1
      if (newScore === emojisList.length) {
        this.setState({
          score: newScore,
          isGameOver: true,
          isWon: true,
          topscore: Math.max(newScore, topscore),
        })
      } else {
        this.setState(
          {
            score: newScore,
            clickedEmojis: [...clickedEmojis, id],
          },
          this.shuffledEmojisList,
        )
      }
    }
  }

  onPlayAgain = () => {
    const {emojisList} = this.props
    this.setState({
      score: 0,
      clickedEmojis: [],
      shuffledEmojisList: [...emojisList],
      isGameOver: false,
      isWon: false,
    })
  }

  render() {
    const {score, topscore, shuffledEmojisList, isGameOver, isWon} = this.state

    return (
      <div className="container">
        {!isGameOver && <NavBar score={score} topscore={topscore} />}
        <div className="game-content">
          {!isGameOver ? (
            <ul className="emojis-list">
              {shuffledEmojisList.map(each => (
                <EmojiCard
                  key={each.id}
                  emojiDetails={each}
                  emojiClick={this.emojiClick}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              score={score}
              isWon={isWon}
              onPlayAgain={this.onPlayAgain}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
