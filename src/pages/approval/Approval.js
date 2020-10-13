import React from 'react';
import {Redirect} from 'react-router-dom';

export default function Approval () {

    return (
      <div>
          <Redirect to="/approval/list"/>
      </div>
    );
}

