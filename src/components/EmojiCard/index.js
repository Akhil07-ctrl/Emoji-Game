import './index.css'

const EmojiCard = props => {
  const {emojiDetails, emojiClick} = props
  const {id, emojiUrl, emojiName} = emojiDetails

  return (
    <li>
      <button
        type="button"
        onClick={() => {
          emojiClick(id)
        }}
      >
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
