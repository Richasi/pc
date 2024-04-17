import React, { useState } from 'react';

const HeavyComputationComponent = ({ items }) => {
  const [filterTerm, setFilterTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const handleFilterChange = (event) => {
    setFilterTerm(event.target.value);
  };

  // Expensive computation to filter items based on filter term
  const filteredResult = (items, filterTerm) => {
    // Simulate an expensive computation by filtering through a large dataset
    console.time('Filtering Time');
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(filterTerm.toLowerCase())
    );
    console.timeEnd('Filtering Time');
    return filtered;
  };

  // Update filtered items using useMemo to memoize the result
  const memoizedFilteredItems = useMemo(() => filteredResult(items, filterTerm), [items, filterTerm]);

  return (
    <div>
      <input type="text" value={filterTerm} onChange={handleFilterChange} placeholder="Filter items" />
      <ul>
        {memoizedFilteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default HeavyComputationComponent;
