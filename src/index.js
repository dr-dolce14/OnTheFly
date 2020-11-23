import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    
    return (
        <div className="ui container comments">
            
            <CommentDetail author="Sam"/>
            <CommentDetail author="Jane"/>
            <CommentDetail author="Lina"/>
            <CommentDetail author="Kate"/>
            <CommentDetail author="Harper"/>
            
        </div>
    );
};

ReactDOM.render(
    <App />, 
    document.getElementById('root')
)