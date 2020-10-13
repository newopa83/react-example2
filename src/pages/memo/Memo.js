import React from 'react';
import {Redirect} from 'react-router-dom';

export default function Memo () {

    return (
      <div>
          <Redirect to="/memo/list"/>
      </div>
    );
}
