import React from 'react';


const SumOfFructs = ({ fruits }) => {

  const SumOfAll = fruits.reduce((total, item) => {
    total += item.count * item.priceOfOne;
    return total
  }, 0);

  return (
    <div>
      <p> Total sum - {SumOfAll}</p>
    </div>
  );
};

export default SumOfFructs;
