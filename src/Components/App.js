import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {

  onSearchSubmit = (term) => {
    axios.get('https://api.unsplash.com/search/photos', {    //the params will add on to this request, as if you were typing /photos?query='fish'
        params: { query: term },
        headers: {
            Authorization: 'Client-ID wHtvmQkhhfxmjd2P6Wt6zXuTpW7DOj7dtfR-PNbHSE0'
        }
    } )
    // this function takes two separate arguments:
    // 1. the address to which we want to make a GET request
    // 2. an object which will contain a number of options that will customize our request
  }


    render() {
    return (
    <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar searchHandler={this.onSearchSubmit} />
    </div>
    )
  }
}

export default App