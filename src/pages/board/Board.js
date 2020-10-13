import React from 'react';
import {Redirect} from 'react-router-dom';

export default function Board () {

    return (
      <div>
          <Redirect to="/board/list"/>
      </div>
    );
}
