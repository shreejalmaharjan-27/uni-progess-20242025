import './App.css';
import KeyPadComponent from './Calculator';
import FacebookEmojiCounter from './Facebookemoji';
import React from 'react';
import ToggleMode from './ToggleModeComponent'

function App() {
  return (
    <React.Fragment>
      <FacebookEmojiCounter type="Like" />
      <FacebookEmojiCounter type="Love" />
      <FacebookEmojiCounter type="happy" />
      <ToggleMode />
    </React.Fragment>
  );
}

export default App;
