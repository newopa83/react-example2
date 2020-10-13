import React from 'react';
import {Redirect} from 'react-router-dom';

const Member = () => {
    return (
        <div>
            <Redirect to="/member/list"/>
        </div>
    );
};

export default Member;
