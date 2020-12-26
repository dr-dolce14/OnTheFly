import React from 'react';
import apicall from '../api/apicall';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
    state = { images: [] }

 onSearchSubmit = async (term) => {
    const response = await apicall.get('/search/photos', {    
        params: { query: term }
      
    });
    this.setState({ images: response.data.results});
  }


    render() {
    return (
    <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar searchHandler={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
    </div>
    )
  }
}

export default App