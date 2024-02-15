import './index.css'

const SuggestionItem = props => {
  const {eachSearchItem, onClickArrow} = props
  const {suggestion, id} = eachSearchItem
  const onClickArrowButton = () => {
    onClickArrow(id)
  }

  return (
    <li className="search-arrow-container">
      <p className="search-item">{suggestion}</p>
      <button className="button" type="button" onClick={onClickArrowButton}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-size"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
