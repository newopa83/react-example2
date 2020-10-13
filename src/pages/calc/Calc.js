import React from 'react';
import {Redirect} from 'react-router-dom';

const Calc = () => {
    return (
        <div>
            <Redirect to="/calc/list"/>
        </div>
    );
};

export default Calc;
