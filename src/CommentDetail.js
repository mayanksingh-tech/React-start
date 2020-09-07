    import React from 'react';
    //import Faker from 'faker';

    const CommentDetail= props => {
        return(
            <div className='comment'>
            <a href='/' className='avataar'>
                <img alt='avataar' src={props.avataar} />
            </a>
            <div className='content'>
                <a href='/' className='author'>
                {props.author}
                </a>
                <div className='metadata'>
                    <span className='date'>Todat at 12PM</span>
                </div>
        <div className='text'> {props.text} </div>
            </div>
            </div>
        );
    };

    export default CommentDetail;