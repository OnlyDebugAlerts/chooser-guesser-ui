import React from "react";
import AuthForm from './components/AuthForm';
import {useDispatch} from "react-redux";
import {signIn} from "../../actions/user";

export default (props) => {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(signIn(data, props.history));
  };

  return (
    <AuthForm
      type="Sign In"
      onSubmit={onSubmit}
    />
  )
}


