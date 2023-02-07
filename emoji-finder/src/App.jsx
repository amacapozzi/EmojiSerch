import React, {PureComponent} from 'react'
import Header from './components/Header'
import SearchInput from './components/SearchInput'
import EmojiResults from './components/EmojiResults'
import filterEmoji from './components/FilterEmoji'


export default class App extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
    filteredEmoji: filterEmoji("", 20)
    };
  }

  handleSerchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  }

  render() {
    return(
      <div>
        <Header />
        <SearchInput textChange={this.handleSerchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
    );
}

}