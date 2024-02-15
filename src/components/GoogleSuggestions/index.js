import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class GoogleSuggestions extends Component {
  state = {searchSuggestion: '', selectedSuggestions: suggestionsList}

  onClickInput = event => {
    this.setState({searchSuggestion: event.target.value})
  }

  onClickArrow = id => {
    const {selectedSuggestions} = this.state
    const filterSuggestion = selectedSuggestions.filter(
      eachList => eachList.id === id,
    )
    this.setState({selectedSuggestions: filterSuggestion})
  }

  render() {
    const {searchSuggestion} = this.state
    const {selectedSuggestions} = this.state
    const filterSearchSuggestions = selectedSuggestions.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchSuggestion.toLowerCase()),
    )
    const selectedSearchSuggestion = selectedSuggestions.map(
      suggestionArray => suggestionArray.suggestion,
    )
    console.log(selectedSearchSuggestion.length)
    let getSelectedSuggestion
    let placeholder
    if (selectedSearchSuggestion.length === 1) {
      getSelectedSuggestion = selectedSearchSuggestion
    } else {
      placeholder = 'Search Google'
    }

    return (
      <div className="bg-container">
        <img
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google"
        />
        <div className="search-container">
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              placeholder={placeholder}
              type="search"
              className="style-input"
              onChange={this.onClickInput}
              value={getSelectedSuggestion}
            />
          </div>

          <ul className="searchItemContainer">
            {filterSearchSuggestions.map(eachSearchItem => (
              <SuggestionItem
                key={eachSearchItem.id}
                onClickArrow={this.onClickArrow}
                eachSearchItem={eachSearchItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
