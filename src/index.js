import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author='Fernando' 
                avatar='https://source.unsplash.com/random' 
                timeAgo='Today at 3.00PM' 
                content='Nice blog post!'
            />            
            <CommentDetail 
                author='Alex' 
                avatar='https://source.unsplash.com/random' 
                timeAgo='Today at 2.00AM' 
                content='I like the subject'
            />            
            <CommentDetail 
                author='Jane' 
                avatar='https://source.unsplash.com/random' 
                timeAgo='Yesterday at 5.00PM' 
                content='I like the writing'
            />            
        </div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'));
