import React from "react";
import {useDispatch} from "react-redux";

import AuthForm from './components/AuthForm';
import {signUp} from "../../actions/user";

export default () => {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(signUp(data));
  };

  return (
    <AuthForm
      type="Sign Up"
      onSubmit={onSubmit}
    />
  )
}


