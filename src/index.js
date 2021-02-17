import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>WARNING!!</h4>
                    Are you sure you want to do this?
                </div>

            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author='Fernando' 
                    avatar='https://source.unsplash.com/random' 
                    timeAgo='Today at 3.00PM' 
                    content='Nice blog post!'
                /> 
            </ApprovalCard>
                       
            <ApprovalCard>
                <CommentDetail 
                    author='Alex' 
                    avatar='https://source.unsplash.com/random' 
                    timeAgo='Today at 2.00AM' 
                    content='I like the subject'
                />
            </ApprovalCard>            

            <ApprovalCard>
                <CommentDetail 
                    author='Jane' 
                    avatar='https://source.unsplash.com/random' 
                    timeAgo='Yesterday at 5.00PM' 
                    content='I like the writing'
                />    
            </ApprovalCard>
        </div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'));
