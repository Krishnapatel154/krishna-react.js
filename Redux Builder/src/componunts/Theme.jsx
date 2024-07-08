
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleTheme } from '../redux/Action';

const Theme = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(handleTheme('light'))}
        disabled={theme === 'light'}
      >
        Switch to Light
      </button>
      <button
        onClick={() => dispatch(handleTheme('dark'))}
        disabled={theme === 'dark'}
      >
        Switch to Dark
      </button>
    </div>
  );
};

export default Theme;
