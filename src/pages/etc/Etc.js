import React from 'react';
import {Redirect} from 'react-router-dom';

export default function Etc () {

    return (
      <div>
          <Redirect to="/board/list"/>
      </div>
    );
}
