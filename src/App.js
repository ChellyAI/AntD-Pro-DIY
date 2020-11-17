import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import BasicLayout from './layout/BasicLayout';
import {router} from './common/router.js';

const handleShowInner = () => (
  <div>听说读写靠，样样都精通</div>
);

function App() {
  return (
    <Router>
      <BasicLayout>
        {router}
        {handleShowInner()}
      </BasicLayout>
    </Router>
  );
}

export default App;
