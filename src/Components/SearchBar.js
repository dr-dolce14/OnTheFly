import React from 'react';



class SearchBar extends React.Component {

    state = { term: ''}

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.searchHandler(this.state.term)
    }

    // onFormSubmit(event) { 
        // e.preventDefault();
        //console.log(this.state.term) <-  THROWS AN 'UNDEFINED' ERROR! BECAUSE YOU NEED AN ARROW FUNCTION FOR 'THIS' TO WORK PROPERLY
    //  arrow functions AUTOMATICALLY bind 'this'
    // The error is: cannot read property 'state' of UNDEFINED...we don't know what the heck 'this' is here!
    //}

    // could also do <form onSubmit={(event) => onFormSubmit(event)}


    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                    <label>Image Search</label>
                    <input 
                    type="text" 
                    value={this.state.term} 
                    onChange={(event) => this.setState({ term: event.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar