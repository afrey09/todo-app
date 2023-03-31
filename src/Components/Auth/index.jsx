import React, { useContext } from 'react';
import { When } from 'react-if';

import { LoginContext } from './context.js';

const Auth= ({ children }) => {

    const { loggedIn, can } = useContext(LoginContext);
    const isLoggedIn = loggedIn;
    const canDo = this.props.capability ? can(this.props.capability) : true;
    const okToRender = isLoggedIn && canDo;

    return (
      <When condition={okToRender}>
        {children}
      </When>
    );
  }


export default Auth;