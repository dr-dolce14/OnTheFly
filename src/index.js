import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () => {
    
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.people()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6pm</span>

                    </div>
                    <div className="text">
                        Nice Blog Post!
                    </div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.people()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6pm</span>

                    </div>
                    <div className="text">
                        Nice Blog Post!
                    </div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.people()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6pm</span>

                    </div>
                    <div className="text">
                        Nice Blog Post!
                    </div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(
    <App />, 
    document.getElementById('root')
)