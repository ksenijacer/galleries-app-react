import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/auth/index';

function Logout() {
  const dispatch = useDispatch();

  dispatch(logout());
}

export default Logout;