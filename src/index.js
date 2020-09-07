    import React from 'react';
    import ReactDOM from 'react-dom';
    import Faker from 'faker';
    import CommentDetail from './CommentDetail';
    import AprrovalCard from './ApprovalCard';
    const App = () => {

        return (

            <div className='ui ccontainer comments'>
                <AprrovalCard>
            <CommentDetail author='Premchand' text='Awesome blog' avataar={Faker.image.avatar()} />
            </AprrovalCard>
            <AprrovalCard>
            <CommentDetail author='Maithili' text='Good blog'avataar={Faker.image.avatar()}  />
            </AprrovalCard>
            <AprrovalCard>
            <CommentDetail author='Munshi' text='Fine blog'avataar={Faker.image.avatar()}  />
            </AprrovalCard>
            </div>
        );
    };

    ReactDOM.render(<App/>, document.querySelector('#root'));