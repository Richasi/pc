import React from 'react';
import HeavyComputationComponent from './HeavyComputationComponent';

function App() {
  const items = ['Apple', 'Banana', 'Orange', /* Add more items here */];

  return (
    <div className="App">
      <h1>Optimizing Component Performance with useMemo</h1>
      <HeavyComputationComponent items={items} />
    </div>
  );
}

export default App;
