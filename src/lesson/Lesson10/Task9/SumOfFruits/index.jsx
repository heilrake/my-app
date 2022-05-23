import React from 'react';


const SumOfFructs = ({ fruits }) => {
  const getSumOfAll = () => {
    const result = fruits.reduce((total, item) => {
      total += item.count * item.priceOfOne;
      return total
    }, 0);

    return result;
  }


  return (
    <div>
      <p> Total sum - {getSumOfAll()}</p>
    </div>
  );
};

export default SumOfFructs;
