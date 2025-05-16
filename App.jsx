import React, { useState } from 'react';
import ResumeView from './ResumeView';
import ButtonView from './ButtonView';

const App = () => {
  const [showResume, setShowResume] = useState(true);

  return (
    <div>
      <button onClick={() => setShowResume(!showResume)}>
        {showResume ? 'Show Button View' : 'Show Resume'}
      </button>
      {showResume ? <ResumeView /> : <ButtonView />}
    </div>
  );
};

export default App;