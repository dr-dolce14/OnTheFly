import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
    
    return (
        <div className="ui container comments">
            
            <CommentDetail 
              author="Sam" 
              timeAgo="Today at 4:45pm" 
              commentText="Holy cow!" 
              avatar={faker.image.image()}
              />
            <CommentDetail 
              author="Jane" 
              timeAgo="Today at 2:00am" 
              commentText="I totally agree!" 
              avatar={faker.image.image()}
              />
            <CommentDetail 
              author="Lina" 
              timeAgo="Yesterday at 10:15pm" 
              commentText="That's not cool" 
              avatar={faker.image.image()}
              />
            <CommentDetail 
              author="Kate" 
              timeAgo="Yesterday at 1:30pm" 
              commentText="Sure, whatever" 
              avatar={faker.image.image()}
              />
            <CommentDetail 
              author="Harper" 
              timeAgo="Today at 9:45am" 
              commentText="Where did you read that??" 
              avatar={faker.image.image()}
              />
            
        </div>
    );
};

ReactDOM.render(
    <App />, 
    document.getElementById('root')
)