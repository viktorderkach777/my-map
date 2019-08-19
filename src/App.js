import React from 'react';
import Map from './components/map';
import Weather from './components/weather';

function App() {
  return (
    <div className="App">
      <Map component={Map} />
      <Weather/>
      
    </div>
  );
}

export default App;
