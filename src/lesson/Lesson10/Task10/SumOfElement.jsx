import React from 'react';


const SumOfFructs = ({ fruits }) => {

  const getSumOfAll = () => {
    const result = fruits.reduce((previousValue, currentValue) => {

      if (!currentValue.isChecked) {
        return previousValue;
      };

      return previousValue += currentValue.count * currentValue.priceOfOne;
    }, 0);

    return result;
  };

  return (
    <div>
      <p> Total sum - {getSumOfAll()}</p>
    </div>
  );
};

export default SumOfFructs;
