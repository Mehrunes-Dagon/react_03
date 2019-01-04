import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
   const img = faker.image.avatar;
   return (
      <div className="ui container comments">
         <ApprovalCard>
            <div>
               <h3>Warning!</h3>
               Are you sure?
            </div>
         </ApprovalCard>
         <ApprovalCard>
            <Comment name='will' time='4:01' content='yo, wussup?' img={img()} />
         </ApprovalCard>
         <ApprovalCard>
            <Comment name='bill' time='1:24' content='sup?' img={img()} />
         </ApprovalCard>
         <ApprovalCard>
            <Comment name='kill' time='2;88' content='yo!' img={img()} />
         </ApprovalCard>
      </div>
   )
};

ReactDOM.render(<App />, document.querySelector('#root'));