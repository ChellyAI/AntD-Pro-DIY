import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import {router} from './common/router.js';

function App() {
  return (
    <div>
      hahahah
      <Router>
        {router}
      </Router>
    </div>
  );
}

export default App;
